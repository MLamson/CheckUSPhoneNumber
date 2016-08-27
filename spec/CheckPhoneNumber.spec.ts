import {CheckPhoneNumber} from "../src/CheckPhoneNumber";

describe('Check Phone Number Test ', () => {
    it('should return FALSE for the number 555-5555', () => {
        expect(CheckPhoneNumber.isValid("555-5555")).toBe(false);
    });
    it('should return true for the number 999999-9999', () => {
        expect(CheckPhoneNumber.isValid("999999-9999")).toBe(true);
    });
    it('should return true for the number 999999 9999', () => {
        expect(CheckPhoneNumber.isValid("999999 9999")).toBe(true);
    });
    it('should return true for the number 999-999-9999', () => {
        expect(CheckPhoneNumber.isValid("999-999-9999")).toBe(true);
    });
    it('should return true for the number 999 999 9999', () => {
        expect(CheckPhoneNumber.isValid("999 999 9999")).toBe(true);
    });
    it('should return true for the number 1 999 999 9999', () => {
        expect(CheckPhoneNumber.isValid("1 999 999 9999")).toBe(true);
    });
    it('should return FALSE for the number 2 (757) 622-7382', () => {
        expect(CheckPhoneNumber.isValid("2 (757) 622-7382")).toBe(false);
    });
    it('should return FALSE for the number 1 555)555-5555', () => {
        expect(CheckPhoneNumber.isValid("1 555)555-5555")).toBe(false);
    });
    it('should return true for the number 1 (555) 555-5555', () => {
        expect(CheckPhoneNumber.isValid("1 (555) 555-5555")).toBe(true);
    });
    it('should return true for the number (555) 555-5555', () => {
        expect(CheckPhoneNumber.isValid("(555) 555-5555")).toBe(true);
    });
    it('should return FALSE for the number 999999999999', () => {
        expect(CheckPhoneNumber.isValid("999999999999")).toBe(false);
    });
    it('should return FALSE the letter "A"', () => {
        expect(CheckPhoneNumber.isValid("A")).toBe(false);
    });
    it('should return FALSE the letter "Z"', () => {
        expect(CheckPhoneNumber.isValid("Z")).toBe(false);
    });
    it('should return FALSE the letter in number "123Z4"', () => {
        expect(CheckPhoneNumber.isValid("123Z4")).toBe(false);
    });
});