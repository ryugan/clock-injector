try
{
  let result;
  let page = $(".page");
  let loginForm = $("#login-form");

  if (!page.length)
  {
    result = {
      code: -1,
      data: null,
      error: {
          code: -1,
          message: "page undefined"
      }
    };
  }
  else
  {
    // On réajuste le padding pour que cela soit visible
    page.css("padding", "0px");

    result = {
      code: 0,
      data: "ok",
      error: null
    };
  }

  if (!loginForm.length)
  {
    result = {
      code: -1,
      data: null,
      error: {
          code: -1,
          message: "loginForm undefined"
      }
    };
  }
  else
  {
    let surprise = $("#surprise");

    // On ne l'ajoute qu'une fois
    if (!surprise.length)
    {
      loginForm.after(`<iframe id="surprise" width="1080" height="630" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    }
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
