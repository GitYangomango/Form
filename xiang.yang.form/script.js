function Modulo() { //Funzione avviata alla pressione del pulsante "submit", controllerà la correttezza di tutti i dati inseriti dall'utente
	//Variabili
	var email_reg_exp = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-]{2,})+\.)+([a-zA-Z0-9]{2,})+$/;
	var cognome=document.modulo.cognome.value;
	var nome=document.modulo.nome.value;
	var matricola=document.modulo.matricola.value;
	var email=document.modulo.email.value;
	var telefono=document.modulo.telefono.value;
	var regione=document.modulo.regione.options[document.modulo.regione.selectedIndex].value;
	var ateneo=document.modulo.ateneo.options[document.modulo.ateneo.selectedIndex].value;	
	var cap=document.modulo.cap.value;
	var wcheck=document.getElementById('lavcheck').checked;
	var descr=document.modulo.desc.value;
		
	if ((/\d/.test(cognome))||(cognome == "") || (cognome == "undefined"))  //Controlla se il cognome contiene valori numerici o è vuoto o undefined
		{
			alert("Il campo Cognome è obbligatorio e non può contenere numeri.");
			document.modulo.cognome.focus();
			return false;
		}
	else if ((/\d/.test(nome))||(nome == "") || (nome == "undefined")) 	//Controlla se il nome contiene valori numerici o è vuoto o undefined
		{
			alert("Il campo Nome è obbligatorio e non può contenere numeri.");
			document.modulo.nome.focus();
			return false;
		}
	else if ((document.getElementById("Maschio").checked == false) && (document.getElementById("Femmina").checked == false))  //Controlla se nessuna delle due opzioni è selezionata
		{
			alert("Il campo Sesso è obbligatorio.");
			return false;
		}
	else if ((ateneo == "") || (ateneo == "undefined")) //Controlla se l'ateneo è vuoto, quindi non selezionato
		{
			alert("Il campo Ateneo è obbligatorio.");
			document.modulo.ateneo.focus();
			return false;
		}
	else if ((isNaN(cap)) || (cap== "") || (cap == "undefined")||(cap.length<"5"))  //Controlla se il CAP contiene valori NON numerici, è vuoto oppure ha meno di 5 valori
		{
			alert("Il campo CAP è numerico e deve non può avere meno di 5 caratteri.");
			document.modulo.cap.value = "";
			document.modulo.cap.focus();
			return false;
		}
	else if ((isNaN(matricola)) || (matricola== "") || (matricola == "undefined")) //Controlla se la matricola contiene valori NON numerici, è vuota
		{
			alert("Il campo Matricola è numerico ed obbligatorio.");
			document.modulo.matricola.value = "";
			document.modulo.matricola.focus();
			return false;
		}
	else if ((regione == "") || (regione == "undefined"))  //Controlla se la regione è vuota, quindi non selezionata
		{
			alert("Il campo Regione di residenza è obbligatorio.");
			document.modulo.regione.focus();
			return false;
		}
	else if (!email_reg_exp.test(email) || (email == "") || (email == "undefined"))  //Controlla la correttezza dell'email, o se è vuota
		{
			alert("Inserire un indirizzo email corretto.");
			document.modulo.email.select();
			return false;
		}
	else if ((isNaN(telefono)) || (telefono == "") || (telefono == "undefined"))   //Controlla se il telefono contiene valori NON numerici, oppure è vuoto
		{
			alert("Il campo Telefono è numerico ed obbligatorio.");
			document.modulo.telefono.value = "";
			document.modulo.telefono.focus();
			return false;
		}
	else if (wcheck==true) //Controlla se è stato selezionato il checkbox "Studente lavoratore"
		{
			if (descr=="") //Se il checkbox è stato selezionato, controlla se la descrizione del lavoro è vuota
				{
					alert("Il campo Descrizione del lavoro svolto non può essere vuoto se è stato selezionato Studente lavoratore");
					return false;
				}
			else 
		{
			alert("I dati sono stati inviati.")
			document.modulo.submit();
		}	
		}	
	else  //Se è tutto corretto, spedisce i dati
		{
			alert("I dati sono stati inviati.")
			document.modulo.submit();
		}
}
function capcheck(){  //Funzione che controlla la correttezza del CAP ogni volta che l'utente ci scrive all'interno. Se i valori inseriti sono minori di 5 visualizzerà nel div "capcheck" il messaggio
		var typed= document.getElementById("cap").value;
		if (typed.length < "5")
		{
			document.getElementById("capcheck").innerHTML= "Il CAP non può avere meno di 5 caratteri";
		}
		else
			document.getElementById("capcheck").innerHTML= "";
	}	
function cognomecheck(){  //Funzione che controlla la correttezza del cognome ogni volta che l'utente ci scrive all'interno. Se il cognome contriene valori numerici, visualizzerà il messaggio
		var typed= document.getElementById("cognome").value;
		if (/\d/.test(typed))
		{
			document.getElementById("cognomecheck").innerHTML= "Il cognome non può contenere numeri";
		}
		else
			document.getElementById("cognomecheck").innerHTML= "";
	}	
function nomecheck(){  //Funzione che controlla la correttezza del nome ogni volta che l'utente ci scrive all'interno. Se il nome contriene valori numerici, visualizzerà il messaggio
		var typed= document.getElementById("nome").value;
		if (/\d/.test(typed))
		{
			document.getElementById("nomecheck").innerHTML= "Il nome non può contenere numeri";
		}
		else
			document.getElementById("nomecheck").innerHTML= "";
	}		