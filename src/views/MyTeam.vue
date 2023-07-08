<template>
	<div class="team">
		<h2 class="grey--text mt-4 mb-4">Team</h2>
		<v-container class="mx-4 mb-4">
			<v-row>
				<v-col
					cols="12"
					sm="6"
					md="4"
					lg="3"
					v-for="person in team"
					:key="person.name"
				>
					<v-card class="text-center ma-3">
						<v-responsive class="pt-4">
							<v-avatar size="90" class="black"
								><img :src="person.avatar" />
							</v-avatar>
						</v-responsive>
						<v-card-text>
							<div class="text-subtitle-1">{{ person.name }}</div>
							<div class="grey--text">{{ person.role }}</div>
						</v-card-text>
						<v-card-actions>
							<v-btn class="grey--text" depressed>
								<v-icon small left> mdi-message </v-icon>
								<span>Message</span>
							</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			team: [
				{
					name: "James Hetfield",
					role: "Sales manager",
					avatar: "av1.png",
				},
				{
					name: "Kirk Hammett",
					role: "Graphic designer",
					avatar: "av2.png",
				},
				{
					name: "Robert Trujillo",
					role: "Web developer",
					avatar: "av3.png",
				},
				{
					name: "Lars Ulrich",
					role: "Social media maverick",
					avatar: "av4.png",
				},
				{
					name: "Jason Newsted",
					role: "Ex-Web developer",
					avatar: "av5.png",
				},
			],
		};
	},
};
</script>
