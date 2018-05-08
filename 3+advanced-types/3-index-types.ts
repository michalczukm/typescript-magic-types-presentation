function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}
let person: Person = {
    name: 'Jarid',
    age: 35
};

let strings: string[] = pluck(person, ['name']);






















import {AbstractControl, FormArray, FormGroup, ValidationErrors} from '@angular/forms';

export type FormStrongTypedExample = {
    field: AbstractControl,
    anotherField: AbstractControl,
    theArrayField: FormArray,
};

function createReadonlyForm<TForm>(form: FormGroup): {[K in keyof TForm]: AbstractControl & FormArray & FormGroup} {
    return Object.keys(form.controls).reduce((result, key) => {
        result[key] = form.controls[key];
        return result;
    }, Object.create(null)) as {[K in keyof TForm]: AbstractControl & FormArray & FormGroup};
}

@Component({
    //...
})
class FooComponent implements OnInit {

    ngOnInit(): void {
        const readonlyTypedForm = createReadonlyForm<FormStrongTypedExample>(this.form);
    }
}