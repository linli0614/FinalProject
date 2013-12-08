function showTab(id) {
	if (id == 'AllContacts') {
		document.getElementById('AllContacts').style.display = 'inline';
		document.getElementById('AddContact').style.display = 'none';
		document.getElementById('backTitleBar').setCaption("All Contacts");
		
		} else if (id == 'AddContact') {
		document.getElementById('AddContact').style.display = 'inline';
		document.getElementById('AllContacts').style.display = 'none';
		document.getElementById('backTitleBar').setCaption("Add Contacts");
	} 
}