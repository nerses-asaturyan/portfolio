const host = "https://api.themoviedb.org/3";
const api_key = "981f01cd4c044798ce3288b407b062d4";

const request = (url, method = "GET") =>
  new Promise(async (rslv, rjct) => {
    try {
      const rsp = await fetch(url, {
        method,
      });
      rslv(rsp.json());
    } catch (err) {
      console.error(err);
      rjct(err);
    }
  });
