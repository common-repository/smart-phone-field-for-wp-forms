class SmartPhoneField {
    constructor( options ) {
        this.options = options;
        this.init();
    }
    init() {
        this.initSmartPhoneField();
    }

    initSmartPhoneField() {
        if (typeof intlTelInput == 'undefined') {
            return;
        }

        const input = document.querySelector('#' + this.options.inputId);
        const iti = window.intlTelInput(input, this.configuration());

        input.addEventListener('blur', (e) => {
            this.validateNumber(input, iti);
        }); 

        input.addEventListener('keyup', (e) => {
            this.formatValidation( input, iti );
        });
    }

    configuration() {
        let config = {
            initialCountry: this.options.initialCountry,
            formatOnDisplay: true,
            countrySearch: true,
            fixDropdownWidth: true,
            nationalMode: true
        };

        return config;
    }

    validateNumber( input, iti ) {
        if( ! this.options.validation ) return;
        const isValid = iti.isValidNumberPrecise();

        if( input.value ) {
            if( isValid ) {
                input.classList.remove('invalid');
                input.classList.add('valid');
            } else {
                input.classList.remove('valid');
                input.classList.add('invalid');
            }
        } else {
            input.classList.remove('valid');
            input.classList.remove('invalid');
        }
    }

    formatValidation( input, iti ) {
        if( ! this.options.validation ) return;

        const isValid = iti.isValidNumberPrecise();

        if( input.value ) {
            if( isValid ) {
                input.classList.remove('invalid');
                input.classList.add('valid');
            }
        } else {
            input.classList.remove('valid');
            input.classList.remove('invalid');
        }
    }
}

document.querySelectorAll('.pcafe_sphone_field').forEach(function(input) {

    let options = {
        inputId: input.getAttribute('id'),
        initialCountry: input.getAttribute('data-dc') ? input.getAttribute('data-dc') : 'us',
        validation: input.getAttribute('data-validation') ? input.getAttribute('data-validation') : 0
    };

    new SmartPhoneField(options);
});