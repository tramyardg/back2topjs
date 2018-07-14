const Back2Top = {
  id: null,
  createBtn () {
    let btn = document.createElement('button');
    let btnId = 'back2topBtn';
    let btnTxt = document.createTextNode('Top');

    btn.appendChild(btnTxt);
    btn.setAttribute('title', 'Go to top');
    btn.setAttribute('class', 'btn btn-primary');
    btn.setAttribute('id', btnId);
    document.body.appendChild(btn);

    Back2Top.setBtnId(btnId);
    Back2Top.stylize();
  },
  setBtnId (btnId) {
    Back2Top.id = $('#' + btnId)[0];
  },
  stylize () {
    Back2Top.id.style.display = 'none';
    Back2Top.id.style.position = 'fixed';
    Back2Top.id.style.bottom = '20px';
    Back2Top.id.style.right = '30px';
    Back2Top.id.style.zIndex = '99';
    Back2Top.id.style.fontSize = '18px';
    Back2Top.id.style.color = 'white';
    Back2Top.id.style.cursor = 'pointer';
    Back2Top.id.style.padding = '15px';
    Back2Top.id.style.borderRadius = '4px';
  },
  scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      Back2Top.id.style.display = 'block';
    } else {
      Back2Top.id.style.display = 'none';
    }
  },
  topFunction () {
    $(Back2Top.id).click(function (e) {
      $('html, body').animate({scrollTop: 0}, 600);
      e.preventDefault();
      return false;
    });
  },
  run () {
    Back2Top.createBtn();
    window.onscroll = function () {
      Back2Top.scrollFunction();
    };
    Back2Top.topFunction();
  }
};
$(document).ready(function () {
  Back2Top.run();
});
