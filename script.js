const container__buttons = document.querySelector('.container__buttons');
const count = document.getElementById('count');

container__buttons.addEventListener( 'click', e => {

      const button = e.target.classList;

      if( button.contains('increase') ) {

         count.innerText++;

          if( count.innerText > 0 ) {
            count.style.color = 'green';
          }

          else if( count.innerText == 0 ) {
            count.style.color = 'black';
          }
    
          else if( count.innerText.length < 2 ) {
            count.innerText = '0' + count.innerText;
          }

      }

      else if( button.contains('decrease') ) {

          count.innerText--;

          if( count.innerText < 0 ) {
            count.style.color = 'red';
          }

          else if( count.innerText == 0 ) {
            count.style.color = 'black';
          }

          else if( count.innerText.length < 2 ) {
            count.innerText = '0' + count.innerText;
          }

      }

      else if( button.contains('reset')) {
          count.innerText = 0;
          count.style.color = 'black';
      }

      else {
          return;
      }

} );

