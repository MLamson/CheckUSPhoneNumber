export class CheckPhoneNumber {

    static isValid(input: any): boolean {

        var regExpPhoneNumber = new RegExp('^[1]{0,1}[ (]{0,2}[0-9]{3}[)]{0,1}[- ]{0,1}[0-9]{3}[- ]{0,1}[0-9]{4}$');

        var testForLeftParenthesis = (input.indexOf("(") !== -1);
        var testForRightParenthesis = (input.indexOf(")") !== -1);

        if (testForLeftParenthesis && !testForRightParenthesis) {
            return false;
        }
        if (!testForLeftParenthesis && testForRightParenthesis) {
            return false;
        }


        if(regExpPhoneNumber.test(input)) {

            return true;
        }
        else {
            return false;
        }
    }

}

