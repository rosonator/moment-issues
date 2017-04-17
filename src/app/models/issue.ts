export class Issue {
    name: string;
    title: string;
    message: string;

    constructor(name: string, title: string, message: string) {
        this.name = name;
        this.title = title;
        this.message = message;
    }
}