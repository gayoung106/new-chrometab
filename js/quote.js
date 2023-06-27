const API_URL =
  "https://port-0-random-quote-4uvg2mleme84ru.sel3.cloudtype.app/";
const quoteElement = document.getElementById("quote");

//명언이 하루에 한번씩만 리셋되게 하기

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
    setQuote(
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 한다. - 찰리 채플린"
    );
  }
};

getQuote();
