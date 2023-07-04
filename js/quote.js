(function () {
  const API_URL = "https://random-quote.hyobb.com/";
  const quoteElement = document.getElementById("quote");
  const quoteItem = localStorage.getItem("quote");

  const nowDate = new Date();
  const month = nowDate.getMonth() + 1;
  const date = nowDate.getDate();

  //명언이 하루에 한번씩만 리셋되게 하기

  const setQuote = (result) => {
    let quote = { createDate: `${month}-${date}`, quoteData: result };
    localStorage.setItem("quote", JSON.stringify(quote));
    quoteElement.textContent = result;
  };

  //명언 데이터 받아오기 api
  const getQuote = async () => {
    try {
      const data = await fetch(API_URL).then((res) => res.json());
      const result = data[1].respond;
      setQuote(result);
    } catch (err) {
      console.log(`err:${err}`);
      setQuote(
        "정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 한다. - 찰리 채플린"
      );
    }
  };

  if (quoteItem) {
    let { createDate, quoteData } = JSON.parse(quoteItem);
    if (createDate === `${month}-${date}`) {
      quoteElement.textContent = `"${quoteData}"`;
    } else {
      getQuote();
    }
  } else {
    getQuote();
  }
})();
