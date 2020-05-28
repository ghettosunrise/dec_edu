function validate(formid)
	{
		var output = false;
		form = $(formid);
		form.addClass('loading');
		form.find('input[name="name"]').focus();
		form.find('input[name="email"]').focus();
		form.find('input[name="phone"]').focus();
		form.find('button[type="submit"]').focus();
		var name = form.find('input[name="name"]').val();
		var email = form.find('input[name="email"]').val();
		var phone = form.find('input[name="phone"]').val();
		phone = phone.replace(/\s/g, '');
		var utm_source = form.find('input[name="utm_source"]').val();
		var utm_campaign = form.find('input[name="utm_campaign"]').val();
		var utm_medium = form.find('input[name="utm_medium"]').val();
		var utm_term = form.find('input[name="utm_term"]').val();
		var gf_action = '';
		var referer = window.location.href;
		var ga = getCookie('_ga').split('.');
		var ga_client_id = ga[2] + '.' + ga[3];
		if ($('.not_error').length >= 3)
		{
			$.ajax(
			{
				type: "POST",
				url: 'export/gf/export.php',
				async: false,
				data:
				{
					gf_action: gf_action,
					name: name,
					email: email,
					phone: phone,
					utm_campaign: utm_campaign,
					utm_source: utm_source,
					utm_medium: utm_medium,
					utm_term: utm_term
				},
				success: function(json_data)
				{
					setCookie('name', name, 365);
					setCookie('email', email, 365);
					setCookie('phone', phone, 365);
					console.log('data sended!');
					console.log(json_data);
					setTimeout(function(){
						form.removeClass('loading');
					}, 5000)
					output = true;
				}
			});
		}
		else
		{
			form.find('input.error').first().focus();
			form.removeClass('loading');
		}
		return output;
	};