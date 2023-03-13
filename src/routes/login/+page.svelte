<script>
	import { goto } from "$app/navigation";
	import TextField from "../../components/input/TextField.svelte";
	import GuestLayout from "../../layouts/GuestLayout.svelte";
	import { validateEmail } from "../../utils/validators";
    import { isAuthenticated, login } from "./auth";

    let authenticated = false;
    isAuthenticated.subscribe(value => authenticated = value);
    $: if(authenticated) {
        console.log("Navigating to /");
        goto("http://localhost:5173/");
    }

    let email = "";
    let password = "";
</script>

<GuestLayout>
    <h1>Welcome</h1>
    <form>
        <TextField
            label={"Email"}
            name={"email"}
            type={"email"}
            bind:value={email}
            icon={"mail"}
            validator={validateEmail}
        />
        <TextField
            label={"Password"}
            name={"password"}
            type={"password"}
            bind:value={email}
            icon={"password"}
            validator={validateEmail}
        />
    </form>
</GuestLayout>