const API_URL =
  "https://port-0-random-quote-4uvg2mleme84ru.sel3.cloudtype.app/";
const quoteElement = document.getElementById("quote");

const setQuote = (result) => {
  quoteElement.textContent = result;
};
const getQuote = async () => {
  try {
    const data = await fetch(API_URL).then((res) => res.json());
    const result = data[1].respond;
    setQuote(result);
  } catch (err) {
    console.log(`err:${err}`);
  }
};

getQuote();
