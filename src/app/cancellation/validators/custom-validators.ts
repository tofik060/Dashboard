import { AbstractControl, FormGroup } from "@angular/forms";

export class CustomValidator {
    static validateName(control: AbstractControl) {
        const value = control.value as string;
        if (value.includes('test')) {
            return {
                invalidName: true
            }
        }
        return null;
    }
    static validateSpecialChar(char: string) {
        return (control: AbstractControl) => {
            const value = control.value as string;
            if (value.includes(char)) {
                return {
                    invalidSpecialChar: true
                }
            }
            return null;
        }
    }
}