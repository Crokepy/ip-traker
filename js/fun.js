export async function pet(ip) {
  let req = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_jUtsrpq8rjjAaKYw5AYF2O4HLvBzc&ipAddress=${ip}`
  );
  let data = await req.json();
  const ubi = data.location.region;
  const timeZone = data.location.timezone;
  const compañia = data.isp;
  console.log(compañia);
}
