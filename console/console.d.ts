/**
* Encapsulates methods used to print some information in the console.
* Instance of this class is declared in the global JavaScript context and is accessible by directly calling console.[xxx] methods.
*/
export declare class Console {
    /**
    * Begins counting a time span for a given name (key).
    */
    public time(reportName: string): void;

    /**
    * Ends a previously started time span through the time method.
    */
    public timeEnd(reportName: string): void;

    /**
    * Asserts a boolean condition and prints a message in case the assert fails.
    */
    public assert(test: boolean, message: string, ...formatParams: any[]): void;

    /**
    * Reports some information.
    */
    public info(message: any, ...formatParams: any[]): void;

    /**
    * Reports a warning.
    */
    public warn(message: any, ...formatParams: any[]): void;

    /**
    * Reports an error.
    */
    public error(message: any, ...formatParams: any[]): void;

    /**
    * Verbously logs a message.
    */
    public log(message: any, ...formatParams: any[]): void;

    /**
    * Prints the current stack trace in the console.
    */
    public trace(): void;

    /**
    * Prints the state of the specified object to the console.
    */
    public dump(obj: any): void;
}