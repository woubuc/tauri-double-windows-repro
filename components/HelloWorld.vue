<template>
	<div class="p-12">
		<h1 class="text-center text-gray-800 text-2xl font-semibold">
			{{ $t('hello_world') }}
		</h1>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
	name: 'HelloWorld',
})
export default class HelloWorld extends Vue {

}
</script>
