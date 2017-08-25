import FontLine from './font-line.vue';
import LevelBar from './level-bar.vue';

Vue.component('font-line', FontLine)
Vue.component('level-bar', LevelBar);
new Vue({
    el: '#app',
    created: function() {
        for (var font in this.fonts) {
            this.selectedFonts.push({name: this.fonts[font], selected: false});
        }
    },
    data: {
        fonts: ['Angoun','Chatu','ChatuLight','Gantgaw','Kamjing_2','Khyay','Kuttar',
        'MasterpieceUniRound','Mon3Anonta1','Myanmar3','MyanmarSansPro','MyanmarSquareLight',
        'MyanmarText','MyanmarYinmar','NamKhoneUnicode','Nayone','Njaun','NK_SSmart2','NK_SSmart3',
        'NK_SSmart4','NotoSansMyanmar','NotoSansMyanmarUI','Padauk','PadaukBook','Pauklay','Phetsot',
        'Phiksel','PhikselSmooth','Ponenyet','Pyidaungsu','Sabae','Sagar','Sanpya','Tagu','Tharlon','Thuriya','Waso','YoeYar'],
        selectedFonts: [],
        active: 0
    },
    methods: {
        changeActive: function(active) {
            this.active = active;
        },
        selectFont: function(index) {
            var selected = this.selectedFonts[index];
            console.log(selected);
            selected.selected = !selected.selected;
            console.log(selected);
            Vue.set(this.selectedFonts, index, selected);
        }
    }
})