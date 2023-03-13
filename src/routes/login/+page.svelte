<script lang="ts">
	import { goto } from "$app/navigation";
	import TextField from "../../components/input/TextField.svelte";
	import GuestLayout from "../../layouts/GuestLayout.svelte";
	import { validateEmail, validatePasswordPresence } from "../../utils/validators";
    import { isAuthenticated, login } from "../../utils/auth";

    let authenticated = false;
    isAuthenticated.subscribe(value => authenticated = value);
    $: if(authenticated) {
        console.log("Navigating to /");
        goto("http://localhost:5173/");
    }

    let email : string = "";
    let password : string = "";

    let validEmail : boolean = false;
    let validPassword : boolean = false;

    $: abbleToSubmit = validEmail && validPassword;
</script>

<GuestLayout>
    <h1>Welcome</h1>
    <form on:submit={(e) => {
        e.preventDefault();
        login(email, password)
    }}>
        <TextField
            label={"Email"}
            name={"email"}
            type={"email"}
            bind:valid={validEmail}
            bind:value={email}
            icon={"mail"}
            validator={validateEmail}
        />
        <TextField
            label={"Password"}
            name={"password"}
            type={"password"}
            bind:valid={validPassword}
            bind:value={password}
            icon={"password"}
            validator={validatePasswordPresence}
        />
        <button type="submit" disabled={!abbleToSubmit}>
            Login
        </button>
    </form>
</GuestLayout>