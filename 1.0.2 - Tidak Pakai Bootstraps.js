let form = document.getElementById( 'form' );
let tmbField = document.getElementById( 'tmbField' );

// tampilan awal
let tampilanAwal = () => {
	let fieldsetAwal = document.createElement( 'fieldset' );
	let isiTampAwal = `
					<legend>Tempat 1</legend>
					<p class="col-auto">
						<label for="isPal">Isi/ Palet :</label>
						<input type="number" name="isPal" id="isPal" value="36" />
					</p>

					<p class="col-auto">
						<label for="jumPal" class="form-label">Jumlah Palet : </label>
						<input type="number" name="jumPal" id="jumPal" class="form-control" />
					</p>
					<p>
						<label for="isPack" class="form-label">Isi /pack : </label>
						<input type="number" name="isPack" id="isPack" class="form-control" value="1000"/>
					</p>
					<p><label for="hasil">Hasil: </label>
						<input type="number" name="hasil" id="hasil" disabled />
					</p>
`;

	fieldsetAwal.id = 'tmp_' + 1;
	fieldsetAwal.innerHTML = isiTampAwal;

	form.appendChild( fieldsetAwal );
}

tampilanAwal();

// tambah field
let k = 2;
tmbField.onclick = ( e ) => {
	let isPal = document.getElementById( 'isPal' );
	let fieldset = document.createElement( 'fieldset' );
	let isPack = document.getElementById( 'isPack' );


	let isi = `
		<legend>Tempat ${k}</legend>
					<p>
						<label for="isPal">Isi/ Palet :</label>
						<input type="number" name="isPal" id="isPal" value="${isPal.value}" />
					</p>

					<p>
						<label for="jumPal" class="form-label">Jumlah Palet : </label>
						<input type="number" name="jumPal" id="jumPal" class="form-control" />
					</p>
					<p>
						<label for="isPack" class="form-label">Isi /pack : </label>
						<input type="number" name="isPack" id="isPack" value="${isPack.value}" />
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
	let isPack = taskListItem.querySelector( 'input#isPack' );
	let hasil = taskListItem.querySelector( 'input#hasil' );

	// console.log( taskListItem );

	//bind deleteTask to delete button
	// fungsi hitung pertempat
	jumPal.onkeyup = () => {
		let valIsPal = isPal.value;
		let valJumPal = jumPal.value;
		let valIsPack = isPack.value;

		hasil.value = ( valIsPal * valJumPal ) * valIsPack;
	}

}


//cycle over incompleteTasksHolder ul list items
for ( var i = 0; i < form.children.length; i++ ) {

	//bind events to list item's children (taskCompleted)
	bindTaskEvents( form.children[i] );
	// console.log( form.children[i] );
}

// format tampilan total
function formatAngka( angka ) {
	var angkaString = angka.toString();
	var hasil = "";

	for ( var i = angkaString.length - 1; i >= 0; i-- ) {
		var digit = angkaString.charAt( i );
		hasil = digit + hasil;

		if ( ( angkaString.length - i ) % 3 === 0 && i !== 0 ) {
			hasil = "." + hasil;
		}
	}

	return hasil;
}

// total

// let totHasil = () => {
let totBtn = document.querySelector( 'button#totBtn' );
let totHas = document.getElementById( 'totHas' );

totBtn.onclick = () => {
	let hasil = 0;

	// cycle for total hasil

	for ( let m = 0; m < form.children.length; m++ ) {
		hasil += parseInt( form.children[m].children[4].children[1].value );
		// console.log( form.children[m].children[3].children[1].value );
	}

	// console.log( hasil );
	totHas.innerText = formatAngka( hasil );
}
// }

// menambahkan tombol reset
let resetBtn = document.getElementById( 'reset' );

resetBtn.onclick = () => {
	// Hapus semua fieldset tambahan kecuali fieldset awal
	for ( let i = form.children.length - 1; i > 0; i-- ) {
		form.removeChild( form.children[i] );
	}

	// Reset nilai input fieldset awal
	let fieldsetAwal = form.children[0];
	let isPalInput = fieldsetAwal.querySelector( '#isPal' );
	let jumPalInput = fieldsetAwal.querySelector( '#jumPal' );
	let isPackInput = fieldsetAwal.querySelector( '#isPack' );
	let hasilInput = fieldsetAwal.querySelector( '#hasil' );

	isPalInput.value = '36';
	jumPalInput.value = '';
	// isPackInput.value = '1000';
	hasilInput.value = '';

	// Reset nilai variabel k
	k = 2;

	// Reset total hasil
	totHas.innerText = '';
};

