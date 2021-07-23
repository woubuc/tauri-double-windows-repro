<template>
	<div>
		<hello-world />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { getCurrent } from '@tauri-apps/api/window';

import HelloWorld from '~/components/HelloWorld.vue';

@Component({
	name: 'IndexPage',
	components: { HelloWorld },
})
export default class IndexPage extends Vue {

	thisFunctionIsNeverCalled() {
		debugger;

		// The getCurrent() function doesn't even need to be called, just being included causes the issue
		getCurrent();
	}
}
</script>
