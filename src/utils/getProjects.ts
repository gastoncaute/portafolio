export async function getProjects() {
  const res = await fetch(
    "https://ouy7dg4a.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27portfolio%27%5D",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (res.ok) {
    const data = await res.json();
    if (data && data.result) {
      return data.result;
    } else {
      return [];
    }
  } else {
    throw new Error("Error getting data from server");
  }
}

// https://ouy7dg4a.api.sanity.io/v2022-03-07/data/query/production?query=*[_type%20==%20%27projects%27]{%20%27language%27:%20language%20} api de lenguage
