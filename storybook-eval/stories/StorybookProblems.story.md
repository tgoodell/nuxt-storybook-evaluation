---
group: 'top'
icon: 'carbon:bookmark'
---

# Issues with Storybook for Vue

- Simply put, the latest version is broken (for sure in their [documentation](https://storybook.nuxtjs.org/examples/basic))
	- Encounter "ERROR Cannot start nuxt: Cannot read properties of undefined (reading '\_\_STORYBOOK\_\_')"
		- Brought up in [Issue \#598](https://github.com/nuxt-modules/storybook/issues/598)
		- Issue is recreated when installing it locally
- Does not seem to be super actively maintained based on the [Github Pulse](https://github.com/nuxt-modules/storybook/pulse)
	- Primarily maintained by chakAs3, with some work by tobiasdiez
	- See below for a graph of contributions to main, excluding merge commits for the past year
		- Unfortunately, Github Pulse does not allow you to view Contributor information for branches other than the default branch
		- Since 15 April 2024, there have been 40 commits to main and 48 commits to all branches.