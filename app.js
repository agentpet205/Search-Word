document.querySelector('.btn').addEventListener('click', searchWord);

function searchWord(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET','data.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            const dic = JSON.parse(this.responseText);
            
            const getMeaning = document.getElementById('word').value;
            
            if(getMeaning === '') {
                const div = document.createElement('div');
                div.className = 'alert alert-danger';
                const txt = document.createTextNode('Field cannot be empty');
                div.appendChild(txt);

                const parent = document.querySelector('.container');
                const err = document.querySelector('.b4-err');
                parent.insertBefore(div,err);

                // Msg timeout
                setTimeout(function(){
                    document.querySelector('.alert').remove();
                }, 3000);
            
            }

                //output
                const output = `
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">${getMeaning}</h4>
                        <p class="card-text">${dic[getMeaning]}</p>
                    </div>
                </div>
                `;

             document.querySelector('.meanings').innerHTML = output;

            
        }

    }

    xhr.send();
}



