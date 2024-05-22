$(document).ready(function(){
    var postUrl = 'http://tp.cpe.fr:8083/auth'; // Stocke l'URL dans une variable

    $(".ui.form").on('submit', function(event){
        event.preventDefault();
        
        // Récupère toutes les valeurs du formulaire
        var formData = $(this).serializeArray();

        // Transforme le tableau en objet pour une utilisation plus facile
        var data = {};
        $(formData).each(function(index, obj){
            data[obj.name] = obj.value;
        });

        // Crée un nouvel objet avec le format attendu par l'API
        var apiData = {
            username: data['username'],
            password: data['pwd'],
        };

        // Envoi des données en POST
        $.ajax({
            url: postUrl,
            type: 'POST',
            data: JSON.stringify(apiData),
            contentType: 'application/json',
            success: function(data){
                console.log(data);
                sessionStorage.setItem('sessionId', 123456789);
                // sessionStorage.setItem('usernameID', data.id);
                // sessionStorage.setItem('username', data.username);
                sessionStorage.setItem('username', "raspoute");
                // sessionStorage.setItem('surname', data.surname);
                // sessionStorage.setItem('lastname', data.lastname);
                // sessionStorage.setItem('money', data.balance);
                sessionStorage.setItem('money', 1000000);
                window.location.href = "http://localhost:8080/index.html";
            },
            error: function(err){
                console.log('Erreur:', err);
                console.log('Détails de l\'erreur:', err.responseText);
            },
        });
    });
});