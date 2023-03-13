<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let icon: string | undefined = undefined;
	export let label: string = '';
	export let name: string = '';
	export let value: string = '';
	export let type: string = 'text';
	export let placeholder: string = '';
	export let valid: boolean = false;
	export let validator: (value: string) => string[] = (value) => [];

	let errors: string[] = [];

	const handleChange = (event: Event) => {
		const input = event.target as HTMLInputElement;
		const newValue = input.value;

		errors = validator(newValue);

		valid = errors.length == 0;
	};

	const isTextType: boolean = ['text', 'email', 'number', 'password', 'tel', 'url'].includes(type);

	if (!isTextType) {
		throw new Error(`Invalid type '${type}' passed to TextField component`);
	}
</script>

{#if isTextType}
	<div>
		<label for={name}>{label}</label>
		<div>
			{#if icon}
				<span class="material-symbols-outlined">{icon}</span>
			{/if}
			<input {type} {value} {placeholder} {name} on:input={handleChange} />
		</div>
		{#if errors.length !== 0}
			<ul>
				{#each errors as error}
					<li>{error}</li>
				{/each}
			</ul>
		{/if}
	</div>
{/if}
