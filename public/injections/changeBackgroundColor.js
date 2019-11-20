try
{
  let result;
  let main = $("#main");

  if (typeof main === "undefined")
  {
    result = {
      code: -1,
      data: null,
      error: {
          code: -1,
          message: "Root undefined"
      }
    };
  }
  else if (typeof colorCode === "undefined")
  {
    result = {
      code: -1,
      data: null,
      error: {
          code: -1,
          message: "colorCode undefined"
      }
    };
  }
  else
  {
    main.css("background-color", colorCode);

    result = {
      code: 0,
      data: "ok " + colorCode,
      error: null
    };
  }

  result;
} catch (e) {

    // Last value/object/function is chrome.tabs.executeScript result
    let result = {
        code: 500,
        data: null,
        error: {
            code: 500,
            message: e.message
        }
    };

    result;
}
