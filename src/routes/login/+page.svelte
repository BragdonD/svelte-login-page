<script>
	import { goto } from "$app/navigation";
    import { isAuthenticated, login } from "./auth";

    let authenticated = false;
    isAuthenticated.subscribe(value => authenticated = value);
    $: if(authenticated) {
        console.log("here");
        goto("http://localhost:5173");
    }
</script>

<form>
    <button on:click={() => {login("", "")}}>Login</button>
    <a href="/">test</a>
</form>