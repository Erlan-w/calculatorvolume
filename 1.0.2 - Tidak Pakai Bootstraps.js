let form = document.getElementById( 'form' );
let tmbField = document.getElementById( 'tmbField' );

// tambah field
let k = 2;
tmbField.onclick = ( e ) => {
	let fieldset = document.createElement( 'fieldset' );
	let isPal = document.getElementById( 'isPal' );


	let isi = `
		<legend>Tempat ${k}</legend>
					<p>
						<label for="isPal">Isi/ Palet :</label>
						<input type="number" name="isPal" id="isPal" value="${isPal.value}" />
					</p>

					<p>
						<label for="jumPal" class="form-label">Jumlah Palet : </label>
						<input type="number" name="jumPal" id="jumPal" class="form-control" onkeyup="hitung()" />
					</p>
					<p><label for="hasil">Hasil: </label>
						<input type="number" name="hasil" id="hasil" disabled />
					</p>
	`;

	fieldset.id = 'tmp_' + k;
	fieldset.innerHTML = isi;

	form.appendChild( fieldset );
	bindTaskEvents( fieldset );
	k++;
	e.preventDefault();
}

var bindTaskEvents = function ( taskListItem ) {
	// console.log( "Bind list item events" );

	//select taskListItem's children
	// let delBtn = taskListItem.querySelector( "button.btn" );
	let isPal = taskListItem.querySelector( 'input#isPal' );
	let jumPal = taskListItem.querySelector( 'input#jumPal' );
	let hasil = taskListItem.querySelector( 'input#hasil' );

	// console.log( taskListItem );

	//bind deleteTask to delete button
	// fungsi hitung pertempat
	jumPal.onkeyup = () => {
		let valIsPal = isPal.value;
		let valJumPal = jumPal.value;

		hasil.value = valIsPal * valJumPal;
	}
}


//cycle over incompleteTasksHolder ul list items
for ( var i = 0; i < form.children.length; i++ ) {

	//bind events to list item's children (taskCompleted)
	bindTaskEvents( form.children[i] );
	// console.log( form.children[i] );
}

// total

// let totHasil = () => {
let totBtn = document.querySelector( 'button#totBtn' );
let totHas = document.getElementById( 'totHas' );

totBtn.onclick = () => {
	let hasil = 0;

	// cycle for total hasil

	for ( let m = 0; m < form.children.length; m++ ) {
		hasil += parseInt( form.children[m].children[3].children[1].value );
		// console.log( form.children[m].children[3].children[1].value );
	}

	// console.log( hasil );
	totHas.innerText = hasil;
}
	// }
