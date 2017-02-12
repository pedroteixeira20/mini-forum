function login_validate()
{

	var adm_user = document.getElementbyID('adm_user').value;
	var adm_password = document.getElementbyID('adm_password').value;
	var user_length = adm_user.length;
    var password_length = adm_password.length;
	var result = adm_user.search(/[^a-z0-9\.\-\ ]/);

	if ((user_length < 3) || (user_length > 20) || (result != -1))
	{
		window.alert("O utilizador deve conter entre 3 e 20 caracteres, e não deve fazer uso de caracteres especiais.");
	}
	if ((password_length < 3) || (password_length > 50))
	{
		window.alert("A password deve conter entre 3 e 50 caracteres.");
	}	
	else
	{
		document.getElementbyID('login').submit();
	}	

}