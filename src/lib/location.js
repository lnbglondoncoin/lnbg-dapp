"use server";

export async function getLocation() {
  const res = await fetch("http://ip-api.com/json");
  const data = await res.json();
  if (data.country) {
    return data;
  }
  return null;
}
