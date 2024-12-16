function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


var app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            currentRound: 0,
            winner: null,
            winStatus: null
        };
    },
    watch: {
        playerHealth(value) {
            this.winner = null;
            if(this.playerHealth === 0 && this.monsterHealth === 0) {
                this.winner = 'draw';
                this.winStatus = true;
            } else if (this.playerHealth === 0 && this.monsterHealth > 0) {
                this.winner = 'monster';
                this.winStatus = true;
            } else {
                console.log('this.winner', this.winner);
                this.winner = 'player';
            }
        },
        monsterHealth(value) {
            this.winner = null;
            if(this.playerHealth === 0 && this.monsterHealth === 0) {
                this.winner = 'draw';
                this.winStatus = true;
            } else if (this.monsterHealth === 0 && this.playerHealth > 0) {
                this.winner = 'player';
                this.winStatus = true;
            } else {
                this.winner = 'monster';
            }
        }
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterHealth + "%" };
        },
        playerBarStyles() {
            return { width: this.playerHealth + "%" };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            if(this.monsterHealth <= 0) {
                this.monsterHealth = 0;
                return;
            }
            this.attackPlayer();
            console.log('this.monsterHealth', this.monsterHealth);
        },
        attackPlayer() {
            const attackValue = getRandomValue(3, 8);
            this.playerHealth -= attackValue;
            if(this.playerHealth <= 0) {
                this.playerHealth = 0;
                return;
            }
            console.log('this.playerHealth', this.playerHealth);

        },
        specialAttack() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.attackPlayer();
        }
    },
});

app.mount("#game");