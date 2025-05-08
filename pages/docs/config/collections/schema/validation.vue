<template>
    <span class="flex flex-col gap-2">
        <section>
            <h1>Validation</h1> 
            <p>
                Validation rules are defined in the schema using simple JSON syntax.
                <br /><br />
                The <span class="tag">match</span> rule uses regular expressions. For example, <code>"^[a-zA-Z0-9]+$"</code> ensures the value contains only English letters (uppercase or lowercase) and digits, no spaces or special characters allowed.
                <br />
                The <span class="tag">minLength</span> and <span class="tag">maxLength</span> rules enforce boundaries on string length, useful for things like usernames, passwords, or titles.
                <br /><br />
                Other supported validation properties include:
                <span class="tag">required</span> (ensures the field is not empty), 
                <span class="tag">enum</span> (restricts to predefined values), 
                <span class="tag">min</span> and <span class="tag">max</span> (for numeric boundaries).
            </p> 
            <my-shiki lang="json" code='{
    "schema": {
        "username": {
            "type": "string",
            "match": "^[a-zA-Z0-9]+$"
        },
        "password": {
            "type": "hash", 
            "minLength": 3,
            "maxLength": 15
        }
    }
}' />
        </section>
    </span>
</template>
