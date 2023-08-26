import supabase, { supabaseUrl } from './supabase';
export async function getCabins() {
  let { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.log(error);
    throw new Error('Cabins couldnot be loaded');
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1. create cabin

  let query = supabase.from('cabins');

  // Create
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // Edit
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error('Cabin couldnot be created');
  }

  // 2. upload image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  //
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    console.log(storageError);
    throw new Error('Cabin image couldnot be uploaded and was not created');
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Cabin couldnot be deleted');
  }

  return data;
}
