<template>
    <div class="main">
        <section class="deets">
            <div>
                <h2>Get in touch today</h2>
                <p>You may reach us using the following details:</p>
                <section class="basic">
                    <div class="info">
                        <div><span class="material-icons">mail_outline</span></div>
                        <div>mother_nature888@nacci888.org</div>
                    </div>
                    <div class="info">
                        <div><span class="material-icons">call</span></div>
                        <div>09155101600</div>
                    </div>
                    <div class="info">
                        <div><span class="material-icons">place</span></div>
                        <div>
                            Nature Awareness and Conservation NGO <br>
                            Brgy Talong 5 <br>
                            Moonwalk Village, <br>
                            Las Pinas City, Metro Manila 1741 <br>
                            Philippines
                        </div>  
                    </div>
                </section>            
                <section class="socials">
                    <div class="info">
                        Twitter: 
                        <nuxt-link to="https://twitter.com/LigayaParadise">
                        LigayaParadise</nuxt-link>
                    </div>
                    <div class="info">
                        Facebook:
                        <nuxt-link to="https://www.facebook.com/ResponsibleNatureAdventuresPhilippines">
                            Responsible Nature Adventure Philippines</nuxt-link>
                    </div>    
                    <div class="info">
                        Linkedin: 
                        <nuxt-link to="https://go.skimresources.com/?id=725X1342&isjs=1&jv=15.4.1-stackpath&sref=https%3A%2F%2Fphilecotourism.wordpress.com%2Fcontact%2F&url=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvioletaimperial%2F&xs=1&xtz=-480&xuuid=1b0c38ff5a30bcbf0d0dd247f664d6eb&xcust=8982&xjsf=other_click__auxclick%20%5B2%5D">
                            Violeta Imperial </nuxt-link>
                    </div>
                    <div class="info">
                        Instagram:
                        <nuxt-link to="https://www.instagram.com/mothernature7878/">
                            Mothernature7878 </nuxt-link>
                    </div>
                </section>
            </div>
        </section>
        <section class="customform">
            <section>
                <article>
                    <h4>Send us an email</h4>
                    <form @submit.prevent="submitForm">
                        <label for="name">Name:</label>
                        <input type="text" id="name" v-model="name">
                        
                        <label for="email">Email:</label>
                        <input type="email" id="email" v-model="email">
                        
                        <label for="message">Message:</label>
                        <textarea id="message" v-model="message"></textarea>
                        
                        <button type="submit">Submit</button>
                    </form>
                </article>
            </section>
        </section>
    </div>
</template>

<script setup>
    function submitForm() {
      const subject = `Contact form submission from ${this.name}`;
      const body = `Name: ${this.name}\nEmail: ${this.email}\n\n${this.message}`;
      window.location.href = `mailto:mother_nature888@nacci888.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
</script>

<style scoped>
.main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
}
.basic > .info {
    display: flex;
    gap: 1em;
}

.basic, .socials {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
</style>