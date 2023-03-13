<script lang="ts">
	import { browser } from "$app/environment";
	import { goto } from "$app/navigation";
    import { logout, isAuthenticated } from "../../utils/auth"

    let authenticated = false;
    isAuthenticated.subscribe(value => authenticated = value);

    $: if(browser) {
        if(authenticated) {
            logout();
        }
        goto("/login");
    }
</script>

<div>

</div>