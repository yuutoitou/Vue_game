var battle = Vue.component('my_chara',{
    template:`
    <article v-bind:style="{height:window_height + 'px'}">
        <div class="top_contents">
<!-- ********************************************************ステータス画面****************************************************** -->
            <div class="status_box status_box_row" v-if="status === false">
                <i style="display: contents;" class="fas fa-times-circle" v-on:click="status = !status"></i>
                <div v-for="user in users">
                    <table>
                        <tr><th>{{user.name}}</th><th>{{"Lv:" + user.level}}</th></tr>
                        <tr><td>{{"攻撃:" + user.aP}}</td><td>{{"防御:" + user.dP}}</td></tr>
                        <tr><td>{{"魔力:" + user.mP}}</td><td>{{"魔防:" + user.mD}}</td></tr>
                        <tr><td>HP:</td><td>{{user.HP + "/" + user.MaxHP}}</td></tr>
                        <tr><td>MP:</td><td>{{user.MP + "/" + user.MaxMP}}</td></tr>
                        <tr><td>Next Lv</td><td>{{"Exp:" + user.exp}}</td></tr>
                    </table>
                </div>
            </div>
<!-- ********************************************************キャラ装備リスト**************************************************** -->
            <div class="status_box  status_box_row" v-if="soubi === true && window_counter === false">
                <i style="display: contents;" class="fas fa-times-circle" v-on:click="soubi = !soubi"></i>
                <table>
                    <caption>戦士</caption>
                    <tr v-for="(item,index) in u1_equip" v-on:click="remove_item = index;change_user = 'u1_equip';
                    set_list = index">
                    <td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table>
                    <caption>ナイト</caption>
                    <tr v-for="(item,index) in u2_equip" v-on:click="remove_item = index;change_user = 'u2_equip';
                    set_list = index">
                    <td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table>
                    <caption>白魔導士</caption>
                    <tr v-for="(item,index) in u3_equip" v-on:click="remove_item = index;change_user = 'u3_equip';
                    set_list = index">
                    <td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table>
                    <caption>黒魔導士</caption>
                    <tr v-for="(item,index) in u4_equip" v-on:click="remove_item = index;change_user = 'u4_equip';
                    set_list = index">
                    <td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
            </div>
<!-- **********************************************************装備変更リスト****************************************************** -->
            <div class="status_box change_list" v-if="set_list <= 3 && window_counter === false">
                <button v-on:click="set_list = 5" class="clause_button">close</button>
                <table v-if="set_list == 0" class="buki_table">
                    <caption>武器</caption>
                    <tr v-for="(item,index) in weapon_box" v-on:click="set_item = weapon_box[index];set_index = index;item_category = 'weapon';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table v-if="set_list == 1" class="buki_table">
                    <caption>盾</caption>    
                    <tr v-for="(item,index) in shield_box" v-on:click="set_item = shield_box[index];set_index = index;item_category = 'shield';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table v-if="set_list == 2" class="buki_table">
                    <caption>防具</caption>    
                    <tr v-for="(item,index) in armor_box" v-on:click="set_item = armor_box[index];set_index = index;item_category = 'armor';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table v-if="set_list == 3" class="buki_table">
                    <caption>指輪</caption>    
                    <tr v-for="(item,index) in ring_box" v-on:click="set_item = ring_box[index];set_index = index;item_category = 'ring';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
            </div>
<!-- **********************************************アイテム一覧*********************************************************** -->            
            <div class="item_boxs" v-if="item === true && set_list === 5 && window_counter === false" style="margin-top:3px;">
                <i style="display: contents;" class="fas fa-times-circle" v-on:click="item = !item"></i>
                <table class="buki_table">
                    <caption>武器</caption>
                    <tr v-for="(item,index) in weapon_box" v-on:click="set_item = weapon_box[index];set_index = index;item_category = 'weapon';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table class="buki_table">
                    <caption>盾</caption>    
                    <tr v-for="(item,index) in shield_box" v-on:click="set_item = shield_box[index];set_index = index;item_category = 'shield';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table class="buki_table">
                    <caption>防具</caption>    
                    <tr v-for="(item,index) in armor_box" v-on:click="set_item = armor_box[index];set_index = index;item_category = 'armor';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
                <table class="buki_table">
                <caption>指輪</caption>    
                    <tr v-for="(item,index) in ring_box" v-on:click="set_item = ring_box[index];set_index = index;item_category = 'ring';
                    item_change()"><td>{{item[0]}}</td><td>{{item[1]}}</td><td>{{item[2]}}</td></tr>
                </table>
            </div>            
        </div>
<!-- ********************************************************歩行画面********************************************************************-->        
        <div class="filde">
            <canvas
                ref="myCanvas"
                width="960"
                height="640"
                v-bind:style="{transform:'scale(' + scale + ')','margin-top':margin + 'px','max-height':window_height + 68 + 'px'}"
                v-show="window_counter === false"
            ></canvas>
        </div>
<!-- ********************************************************戦闘画面********************************************************************-->        
<!-- ********************************************************敵キャラ画面********************************************************************-->        
        <div class="chara_field" v-show="window_counter === true" v-bind:style="{'padding-top':padding_top + 'px'}">
            <div class="teki_box">
                <div v-for="chara in battle_chara" class="teki">
                    <div class="chara" v-if="chara.hp_counter === 1">
                        <div>
                            <div class="chara_box">
                                <div class="hp_gage_box">
                                    <p class="hp_gage" v-bind:style="{width:chara.HP / chara.MaxHP * 100 + '%'}"></p>
                                </div>
                                <img id="1" class="teki_img" v-bind:src="chara['img']" v-bind:style="{transform:chara.motion}">
                                <img v-if="chara.damage_img === 1" class="damage_img" v-bind:src="chara.d_image">
                                <transition name="form-box">
                                    <p class="damege_num" v-if="chara.counter === 1" v-bind:style="{color:damage_color}">{{chara.damege}}</p>
                                </transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<!-- ********************************************************自キャラ画面********************************************************************-->                
            <div class="user_box">
                <div class="chara" v-if="counter1 === 1" v-for="user in users" v-bind:style="{transform:user.motion}">
                    <div>
                        <div class="chara_box">
                            <img id="1" v-bind:src="user['img']">
                            <img v-if="user.damage_img === 1" class="damage_img" v-bind:src="user.d_image">
                            <transition name="form-box">
                                <p class="damege_num" v-if="user.counter === 1" v-bind:style="{color:damage_color}">{{user.damage}}</p>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!-- ********************************************************コンソール画面********************************************************************-->         
        <div class="console" v-bind:style="{top:window_height - 211 + 'px'}">
<!-- ********************************************************ログ表示**************************************************************************-->             
            <div class="log">
                <p v-html="log"></p>
            </div>
<!-- ****************************************************キャラ体力ゲージ画面*******************************************************************-->             
            <div class="job_box user_st">
                <div v-for="user in users">
                    <div class="chara_st">
                        <p style="text-align: left;font-size: 14px;"> {{user.name}}</p>
                        <div style="display:flex;">
                            <p style="font-size:12px;">{{"HP:" + user.HP + "/" + user.MaxHP}}</p>
                            <p style="font-size:12px;">{{"MP:" + user.MP + "/" + user.MaxMP}}</p>
                        </div>
                    </div>
                    <div class="hp_gage_box">
                        <p class="hp_gage" v-bind:style="{width:user.HP / user.MaxHP * 100 + '%'}"></p>
                    </div>
                    <div class="hp_gage_box" style="margin-top: 3px;">
                        <p class="hp_gage" style="background-color:green;" v-bind:style="{width:user.MP / user.MaxMP * 100 + '%'}"></p>
                    </div>
                </div>
            </div>
<!-- ********************************************************操作画面**************************************************************************-->            
            <div class="job_box">
            <i class="fas fa-sync-alt" v-on:click="button_counter = !button_counter;job_button = !job_button"></i>
<!-- *****************************************************装備確認画面*************************************************************************-->            
                <div class="job_button" v-if="button_counter === true && job_button === true">
                    <p class="kaisou">{{"地下" + main_counter1 + "階"}}</p>
                    <button v-on:click="status = !status">ステータス</button>
                    <button v-on:click="soubi = !soubi" v-if="window_counter === false">装備変更</button>
                    <button v-on:click="item = !item" v-if="window_counter === false">アイテム</button> 
                </div>
<!-- ********************************************************移動キー画面***********************************************************************-->                
                <div class="s_button" v-if="window_counter === false && button_counter === false">
                    <p @touchstart="mouseOn = 38;mouseOut = 0" @touchend="mouseOut = 38;mouseOn = 0"><i class="fas fa-arrow-up"></i></p>
                    <div class="s_button_center">
                        <p @touchstart="mouseOn = 37;mouseOut = 0" @touchend="mouseOut = 37;mouseOn = 0"><i class="fas fa-arrow-left"></i></p>
                        <p @touchstart="mouseOn = 39;mouseOut = 0" @touchend="mouseOut = 39;mouseOn = 0"><i class="fas fa-arrow-right"></i></p>
                    </div>
                    <p @touchstart="mouseOn = 40;mouseOut = 0" @touchend="mouseOut = 40;mouseOn = 0"><i class="fas fa-arrow-down"></i></p>
                </div>
<!-- ********************************************************行動キャラ選択画面*****************************************************************-->                
                <div class="job_button" v-if="job_counter === 0 && window_counter === true && job_button === false">
                    <button v-on:click="job_counter = 1;active_user = users.user_1;active_Amagic = Amagic_1;active_Fmagic = Fmagic_1;active_ability = ability_1" v-if="job_counter === 0 && users.user_1.bt_counter === 1">{{users.user_1.name}}</button>
                    <button v-on:click="job_counter = 1;active_user = users.user_2;active_Amagic = Amagic_2;active_Fmagic = Fmagic_2;active_ability = ability_2" v-if="job_counter === 0 && users.user_2.bt_counter === 1">{{users.user_2.name}}</button>
                    <button v-on:click="job_counter = 1;active_user = users.user_3;active_Amagic = Amagic_3;active_Fmagic = Fmagic_3;active_ability = ability_3" v-if="job_counter === 0 && users.user_3.bt_counter === 1">{{users.user_3.name}}</button>
                    <button v-on:click="job_counter = 1;active_user = users.user_4;active_Amagic = Amagic_4;active_Fmagic = Fmagic_4;active_ability = ability_4" v-if="job_counter === 0 && users.user_4.bt_counter === 1">{{users.user_4.name}}</button>
                </div>
<!-- **********************************************************行動選択画面********************************************************************-->                
                <div class="job_button" v-if="job_counter === 1 && window_counter === true && job_button === false">
                    <button v-on:click="job_counter = 2" v-if="job_counter === 1">攻撃</button>
                    <button v-on:click="job_counter = 3" v-if="job_counter === 1">攻撃魔法</button>
                    <button v-on:click="job_counter = 4" v-if="job_counter === 1">補助魔法</button>
                    <button v-on:click="job_counter = 5" v-if="job_counter === 1">アビリティ</button>
                </div>
<!-- *******************************************************攻撃ターゲット選択画面**************************************************************-->                    
                <div class="job_button" v-if="job_counter === 2 && window_counter === true && job_button === false">
                    <button v-on:click="job_counter = 0;target = battle_chara[0];attackU('A',active_user,action,down_mp)" v-if="job_counter === 2 && battle_chara[0].hp_counter === 1">{{battle_chara[0].name}}</button>
                    <button v-on:click="job_counter = 0;target = battle_chara[1];attackU('A',active_user,action,down_mp)" v-if="job_counter === 2 && battle_chara[1].hp_counter === 1">{{battle_chara[1].name}}</button>
                    <button v-on:click="job_counter = 0;target = battle_chara[2];attackU('A',active_user,action,down_mp)" v-if="job_counter === 2 && battle_chara[2].hp_counter === 1">{{battle_chara[2].name}}</button>
                    <button v-on:click="job_counter = 0;target = battle_chara[3];attackU('A',active_user,action,down_mp)" v-if="job_counter === 2 && battle_chara[3].hp_counter === 1">{{battle_chara[3].name}}</button>
                </div>
<!-- **********************************************************攻撃魔法選択画面******************************************************************-->                    
                <div class="magic_button" v-if="job_counter === 3 && window_counter === true && job_button === false">
                    <button v-on:click="job_counter = 2;action = magic.set;down_mp = magic.down_mp" v-if="job_counter === 3 && users.user_1.level >= magic.level" v-for="magic in active_Amagic">{{magic.name + " MP:" + magic.down_mp}}</button>
                    <button v-on:click="job_counter = 0" v-if="job_counter === 3">戻る</button>
                </div>
<!-- **********************************************************支援魔法選択画面******************************************************************-->                    
                <div class="magic_button" v-if="job_counter === 4 && window_counter === true && job_button === false">
                    <button v-on:click="job_counter = 6;action = magic.set;down_mp = magic.down_mp" v-if="job_counter === 4 && users.user_1.level >= magic.level" v-for="magic in active_Fmagic">{{magic.name + " MP:" + magic.down_mp}}</button>
                    <button v-on:click="job_counter = 0" v-if="job_counter === 4">戻る</button>
                </div>
<!-- **********************************************************アビリティ選択画面****************************************************************-->                                        
                <div class="magic_button" v-if="job_counter === 5 && window_counter === true && job_button === false">
                    <button v-on:click="job_counter = 2;action = magic.set;down_mp = magic.down_mp" v-if="job_counter === 5 && users.user_1.level >= magic.level" v-for="magic in active_ability">{{magic.name + " MP:" + magic.down_mp}}</button>
                    <button v-on:click="job_counter = 0" v-if="job_counter === 5">戻る</button>
                </div>
<!-- ******************************************************支援魔法反映キャラ選択画面*************************************************************-->                                        
                <div class="job_button" v-if="job_counter === 6 && window_counter === true && job_button === false">
                    <button v-on:click="job_counter = 0;assist_user = users.user_1;attackU('B',active_user,action,down_mp,assist_user)" v-if="job_counter === 6 && users.user_1.HP > 0">{{users.user_1.name}}</button>
                    <button v-on:click="job_counter = 0;assist_user = users.user_2;attackU('B',active_user,action,down_mp,assist_user)" v-if="job_counter === 6 && users.user_2.HP > 0">{{users.user_2.name}}</button>
                    <button v-on:click="job_counter = 0;assist_user = users.user_3;attackU('B',active_user,action,down_mp,assist_user)" v-if="job_counter === 6 && users.user_3.HP > 0">{{users.user_3.name}}</button>
                    <button v-on:click="job_counter = 0;assist_user = users.user_4;attackU('B',active_user,action,down_mp,assist_user)" v-if="job_counter === 6 && users.user_4.HP > 0">{{users.user_4.name}}</button>
                </div>                      
            </div>
        </div>
    </article>`
, data:function(){
    return {
        //windowサイズ制御
        window_height:0,
        margin:0,
        padding_top:0,
        scale:1,
        mouseOn:0,
        mouseOut:0,
        //歩行と戦闘の切替 false -> 歩行画面
        window_counter:false,
        //攻撃可能フラグ
        counter1: 1,
        //敵キャラ行動フラグ
        button_counter:false,
        //操作画面切替
        job_counter:0,
        //アイテム変更キャラ
        set_list:5,
        //表示画面切り替え
        status:true,
        soubi:false,
        item:false,
        job_button:false,
        down_mp:0,
        //行動キャラフラグ
        active_user:"",
        //支援キャラフラグ
        assist_user:"",
        //行動選択配列
        active_Amagic:{},
        active_Fmagic:{},
        active_ability:{},
        //キャラ上のダメージカラー
        damage_color:'#ff2600',
        //コンソール画面のログ
        log:"",
        //使用 魔法orアビリティをセット
        action:"",
        //ターゲットキャラ
        target:"",
        //現在の階数
        main_counter1: 1,
        //経験値
        exp:0,
        //アイテム変更
        remove_item:"",
        set_item:"",
        //変更するアイテムカテゴリー
        set_index:"",
        //アイテムを変更するキャラ
        change_user:[],
        //獲得アイテム振り分け
        item_category:"",
        //ドロップアイテムリスト
        drop_item:[],
        //獲得アイテムリスト
        get_item:[],
        //所持装備
        weapon_box:[],
        shield_box:[],
        armor_box:[],
        ring_box:[],
        //ユーザーの現在装備
        u1_equip:[
            ['木の剣','攻','30','w'],
            ['木の盾','防','30','s'],
            ['木の鎧','防','30','a'],
            ['木の指輪','魔','30','r']
        ],
        u2_equip:[
            ['木の剣','攻','30','w'],
            ['木の盾','防','30','s'],
            ['木の鎧','防','30','a'],
            ['木の指輪','魔','30','r']
        ],
        u3_equip:[
            ['木の剣','攻','30','w'],
            ['木の盾','防','30','s'],
            ['木の鎧','防','30','a'],
            ['木の指輪','魔','30','r']
        ],
        u4_equip:[
            ['木の剣','攻','30','w'],
            ['木の盾','防','30','s'],
            ['木の鎧','防','30','a'],
            ['木の指輪','魔','30','r']
        ],
        //アイテムリスト
        weapon1:[
            ['クレイモア','攻','50','w'],
            ['ブレイブハート','攻','80','w'],
            ['ルセントソード','攻','100','w'],
            ['アイスブランド','攻','130','w'],
            ['王国剣士大剣','攻','160','w'],
            ['ダーククレイモア','攻','200','w'],
            ['メルクリウスソード','攻','250','w'],
            ['ギガントソード','攻','280','w'],
            ['ラグナロク','攻','320','w'],
            ['金剛双手剣','攻','500','w']                
        ],
        weapon2:[
            ['アッシュスタッフ','魔','50','w'],
            ['ホーリースタッフ','魔','80','w'],
            ['エルムスタッフ','魔','100','w'],
            ['オークスタッフ','魔','130','w'],
            ['クォータースタッフ','魔','160','w'],
            ['アイススタッフ','魔','200','w'],
            ['プルートスタッフ','魔','250','w'],
            ['癒しの杖','魔','280','w'],
            ['緊那羅の棍','魔','320','w'],
            ['神代の杖','魔','500','w']                
        ],
        shield1:[
            ['ラワンシールド','防','50','s'],
            ['アスピス','防','80','s'],
            ['エルムシールド','防','100','s'],
            ['カイトシールド','防','130','s'],
            ['シンガーシールド','防','160','s'],
            ['タージェ','防','200','s'],
            ['王国従士制式盾','防','250','s'],
            ['マスターシールド','防','280','s'],
            ['ダークシールド','防','320','s'],
            ['アブゾシールド','防','500','s']                
        ],
        shield2:[
            ['ラワンシールド','抗','50','s'],
            ['ジャッジシールド','抗','80','s'],
            ['���リンシールド','抗','100','s'],
            ['タートルシールド','抗','130','s'],
            ['エルムシールド','抗','160','s'],
            ['ヒーラーシールド','抗','200','s'],
            ['フェアリーシールド','抗','250','s'],
            ['アイスシールド','抗','280','s'],
            ['タリカー','抗','320','s'],
            ['カイザーシールド','抗','500','s']                
        ],        
        armor1:[
            ['ブロンズハーネス','防','50','a'],
            ['ミスリル銃士リバリ','防','80','a'],
            ['近衛騎士リバリ','防','100','a'],
            ['スケイルメイル','防','130','a'],
            ['ブラスハーネス','防','160','a'],
            ['ダークキュイラス','防','200','a'],
            ['オーガジャーキン','防','250','a'],
            ['デーモンハーネス','防','280','a'],
            ['八幡胴丸','防','320','a'],
            ['アダマンキュイラス','防','500','a']                
        ],
        ring1:[
            ['力の指輪+1','力','50','r'],
            ['力の指輪+2','力','80','r'],
            ['力の指輪+3','力','100','r'],
            ['力の指輪+4','力','130','r'],
            ['力の指輪+5','力','160','r'],
            ['力の指輪+6','力','200','r'],
            ['力の指輪+7','力','250','r'],
            ['力の指輪+8','力','280','r'],
            ['力の指輪+9','力','320','r'],
            ['力の指輪+10','力','500','r'],                   
        ],
        ring2:[
            ['守の指輪+1','防','50','r'],
            ['守の指輪+2','防','80','r'],
            ['守の指輪+3','防','100','r'],
            ['守の指輪+4','防','130','r'],
            ['守の指輪+5','防','160','r'],
            ['守の指輪+6','防','200','r'],
            ['守の指輪+7','防','250','r'],
            ['守の指輪+8','防','280','r'],
            ['守の指輪+9','防','320','r'],
            ['守の指輪+10','防','500','r'],                   
        ],
        ring3:[
            ['魔法の指輪+1','魔','50','r'],
            ['魔法の指輪+2','魔','80','r'],
            ['魔法の指輪+3','魔','100','r'],
            ['魔法の指輪+4','魔','130','r'],
            ['魔法の指輪+5','魔','160','r'],
            ['魔法の指輪+6','魔','200','r'],
            ['魔法の指輪+7','魔','250','r'],
            ['魔法の指輪+8','魔','280','r'],
            ['魔法の指輪+9','魔','320','r'],
            ['魔法の指輪+10','魔','500','r'],                   
        ],
        ring4:[
            ['耐耐の指輪+1','耐','50','r'],
            ['耐耐の指輪+2','耐','80','r'],
            ['耐耐の指輪+3','耐','100','r'],
            ['耐耐の指輪+4','耐','130','r'],
            ['耐耐の指輪+5','耐','160','r'],
            ['耐耐の指輪+6','耐','200','r'],
            ['耐耐の指輪+7','耐','250','r'],
            ['耐耐の指輪+8','耐','280','r'],
            ['耐耐の指輪+9','耐','320','r'],
            ['耐耐の指輪+10','耐','500','r'],                   
        ],
        ring5:[
            ['体力の指輪+1','HP','50','r'],
            ['体力の指輪+2','HP','80','r'],
            ['体力の指輪+3','HP','100','r'],
            ['体力の指輪+4','HP','130','r'],
            ['体力の指輪+5','HP','160','r'],
            ['体力の指輪+6','HP','200','r'],
            ['体力の指輪+7','HP','250','r'],
            ['体力の指輪+8','HP','280','r'],
            ['体力の指輪+9','HP','320','r'],
            ['体力の指輪+10','HP','500','r'],                   
        ],
        ring6:[
            ['精神の指輪+1','MP','50','r'],
            ['精神の指輪+2','MP','80','r'],
            ['精神の指輪+3','MP','100','r'],
            ['精神の指輪+4','MP','130','r'],
            ['精神の指輪+5','MP','160','r'],
            ['精神の指輪+6','MP','200','r'],
            ['精神の指輪+7','MP','250','r'],
            ['精神の指輪+8','MP','280','r'],
            ['精神の指輪+9','MP','320','r'],
            ['精神の指輪+10','MP','500','r'],                   
        ],        
        //自キャラ配列
        users:{
        user_1:{'name':'戦士','img':'image/chara1.png','HP':200,'MP':50,'MaxHP':200,'MaxMP':50,'aP':10,'dP':10,'mP':10,'mD':10,
            'exp':100,'level':1,'counter':0,'bt_counter':1,'damage':0,'damage_img':0,'d_image':"",'motion':"",
            'Khp':200,'Kmp':50,'Kap':22,'Kdp':18,'Kma':12,'Kmd':55,'Uhp':0,'Ump':0,'Uap':0,'Udp':0,'Uma':0,'Umd':0,
        },
        user_2:{'name':'ナイト','img':'image/chara2.png','HP':200,'MP':50,'MaxHP':200,'MaxMP':50,'aP':10,'dP':10,'mP':10,'mD':10,
            'exp':100,'level':1,'counter':0,'bt_counter':1,'damage':0,'damage_img':0,'d_image':"",'motion':"",
            'Khp':200,'Kmp':50,'Kap':18,'Kdp':22,'Kma':12,'Kmd':58,'Uhp':0,'Ump':0,'Uap':0,'Udp':0,'Uma':0,'Umd':0,
        },
        user_3:{'name':'白魔導士','img':'image/chara3.png','HP':180,'MP':60,'MaxHP':180,'MaxMP':60,'aP':10,'dP':10,'mP':10,'mD':10,
            'exp':100,'level':1,'counter':0,'bt_counter':1,'damage':0,'damage_img':0,'d_image':"",'motion':"",
            'Khp':180,'Kmp':60,'Kap':16,'Kdp':15,'Kma':18,'Kmd':68,'Uhp':0,'Ump':0,'Uap':0,'Udp':0,'Uma':0,'Umd':0,            
        },
        user_4:{'name':'黒魔導士','img':'image/chara4.png','HP':180,'MP':60,'MaxHP':180,'MaxMP':60,'aP':10,'dP':10,'mP':10,'mD':10,
            'exp':100,'level':1,'counter':0,'bt_counter':1,'damage':0,'damage_img':0,'d_image':"",'motion':"",
            'Khp':180,'Kmp':60,'Kap':14,'Kdp':12,'Kma':22,'Kmd':66,'Uhp':0,'Ump':0,'Uap':0,'Udp':0,'Uma':0,'Umd':0,            
        },
        },
        //効果継続用カウンター
        counter:[
        //[0]:プロテス1~3/[1]:シェル/[2]バーサク/[3]ディフェンダー/[4]挑発  
            //user1
            [0,0,0,0,0],
            //user2
            [0,0,0,0,0],
            //user3
            [0,0,0,0,0],
            //user4
            [0,0,0,0,0]
        ],
        //ステータスアップ用
        status_up:[
        //1次元 user 2次元[0]攻[1]防[2]魔攻[3]魔防 3次元 ステータスアップ用   
            //user1
            [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],],
            //user2
            [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],],
            //user3
            [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],],
            //user4
            [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],],
        ],
        //自キャラ攻撃魔法配列[0~3]
        Amagic_1:{
        },
        Amagic_2:{
            0:{'name':'ホーリー','down_mp':20,'set':'H1','level':1},
            1:{'name':'ホーリー2','down_mp':50,'set':'H2','level':10},
            2:{'name':'ホーリー3','down_mp':100,'set':'H3','level':20},            
        },
        Amagic_3:{
            0:{'name':'ホーリー','down_mp':20,'set':'H1','level':1},
            1:{'name':'ホーリー2','down_mp':50,'set':'H2','level':10},
            2:{'name':'ホーリー3','down_mp':100,'set':'H3','level':20},
            3:{'name':'ホーリガ','down_mp':40,'set':'HG1','level':5},
            4:{'name':'ホーリガ2','down_mp':100,'set':'HG2','level':15},
            5:{'name':'ホーリガ3','down_mp':180,'set':'HG3','level':25},            
        },
        Amagic_4:{
            0:{'name':'ストーン','down_mp':12,'set':'S1','level':1},
            1:{'name':'ストーン2','down_mp':24,'set':'S2','level':10},
            2:{'name':'ストーン3','down_mp':36,'set':'S3','level':20},
            3:{'name':'ウォータ','down_mp':15,'set':'W1','level':3},
            4:{'name':'ウォータ2','down_mp':30,'set':'W1','level':12},
            5:{'name':'ウォータ3','down_mp':45,'set':'W1','level':22},            
            6:{'name':'ファイア','down_mp':18,'set':'F1','level':5}, 
            7:{'name':'ファイア2','down_mp':36,'set':'F2','level':14},            
            8:{'name':'ファイア3','down_mp':52,'set':'F3','level':24},                        
            9:{'name':'ブリザド','down_mp':21,'set':'B1','level':7}, 
            10:{'name':'ブリザド2','down_mp':42,'set':'B2','level':16},             
            11:{'name':'ブリザド3','down_mp':63,'set':'B3','level':26}, 
            12:{'name':'サンダー','down_mp':24,'set':'R1','level':9}, 
            13:{'name':'サンダー2','down_mp':48,'set':'R2','level':18}, 
            14:{'name':'サンダー3','down_mp':72,'set':'R3','level':28},
            15:{'name':'ストンガ','down_mp':24,'set':'SG1','level':5},
            16:{'name':'ストンガ2','down_mp':36,'set':'SG2','level':15},
            17:{'name':'ストンガ3','down_mp':72,'set':'SG3','level':25},
            18:{'name':'ウォタガ','down_mp':30,'set':'WG1','level':8},
            19:{'name':'ウォタガ2','down_mp':60,'set':'WG1','level':16},
            20:{'name':'ウォタガ3','down_mp':90,'set':'WG1','level':26},            
            21:{'name':'ファイガ','down_mp':36,'set':'FG1','level':10}, 
            22:{'name':'ファイガ2','down_mp':72,'set':'FG2','level':19},            
            23:{'name':'ファイガ3','down_mp':108,'set':'FG3','level':29},                        
            24:{'name':'ブリザガ','down_mp':32,'set':'BG1','level':12}, 
            25:{'name':'ブリザガ2','down_mp':84,'set':'BG2','level':21},             
            26:{'name':'ブリザガ3','down_mp':126,'set':'BG3','level':31}, 
            27:{'name':'サンダガ','down_mp':48,'set':'RG1','level':14}, 
            28:{'name':'サンダガ2','down_mp':96,'set':'RG2','level':26}, 
            29:{'name':'サンダガ3','down_mp':144,'set':'RG3','level':36},
            },
        //自キャラ補助魔法配列[0~3]
        Fmagic_1:{
            0:{'name':'瞑想','down_mp':0,'set':'MS','level':1},
            1:{'name':'バーサク','down_mp':20,'set':'BS','level':1},
            2:{'name':'ディフェンダー','down_mp':20,'set':'DF','level':1},
        },
        Fmagic_2:{
            0:{'name':'瞑想','down_mp':0,'set':'MS','level':1},            
            1:{'name':'ケアル','down_mp':10,'set':'K1','level':1},
            2:{'name':'ケアル2','down_mp':30,'set':'K2','level':20},
            3:{'name':'ケアル3','down_mp':50,'set':'K3','level':30},
            4:{'name':'プロテス','down_mp':10,'set':'P1','level':5},
            5:{'name':'プロテス2','down_mp':30,'set':'P2','level':15},
            6:{'name':'プロテス3','down_mp':50,'set':'P3','level':30},
            7:{'name':'シェル','down_mp':10,'set':'S1','level':5},
            8:{'name':'シェル2','down_mp':30,'set':'S2','level':15},
            9:{'name':'シェル3','down_mp':50,'set':'S3','level':30},            
            10:{'name':'挑発','down_mp':20,'set':'CH','level':1},
            11:{'name':'バーサク','down_mp':20,'set':'BS','level':1},
            12:{'name':'ディフェンダー','down_mp':20,'set':'DF','level':1},            
        },
        Fmagic_3:{
            0:{'name':'瞑想','down_mp':0,'set':'MS','level':1},            
            1:{'name':'ケアル','down_mp':10,'set':'K1','level':1},
            2:{'name':'ケアル2','down_mp':30,'set':'K2','level':10},
            3:{'name':'ケアル3','down_mp':50,'set':'K3','level':20},
            4:{'name':'プロテス','down_mp':10,'set':'P1','level':1},
            5:{'name':'プロテス2','down_mp':30,'set':'P2','level':10},
            6:{'name':'プロテス3','down_mp':50,'set':'P3','level':20},
            7:{'name':'シェル','down_mp':10,'set':'S1','level':1},
            8:{'name':'シェル2','down_mp':30,'set':'S2','level':10},
            9:{'name':'シェル3','down_mp':50,'set':'S3','level':20},
            10:{'name':'ケアルラ','down_mp':25,'set':'KG1','level':5},
            11:{'name':'ケアルラ2','down_mp':60,'set':'KG2','level':15},
            12:{'name':'ケアルラ3','down_mp':120,'set':'KG3','level':25},
            13:{'name':'プロテア','down_mp':30,'set':'PG1','level':5},
            14:{'name':'プロテア2','down_mp':70,'set':'PG2','level':15},
            15:{'name':'プロテア3','down_mp':100,'set':'PG3','level':25},            
            16:{'name':'シェルラ','down_mp':30,'set':'SG1','level':5},
            17:{'name':'シェルラ2','down_mp':70,'set':'SG2','level':15},
            18:{'name':'シェルラ3','down_mp':100,'set':'SG3','level':25},

        },
        Fmagic_4:{
            0:{'name':'瞑想','down_mp':0,'set':'MS','level':1},
        },
        //自キャラアビリティ配列[0~3]
        ability_1:{
            0:{'name':'ダブルアタック','down_mp':20,'set':'D','level':1},
            1:{'name':'デシメーション','down_mp':60,'set':'S','level':10},            
            2:{'name':'ボーパルブレード','down_mp':60,'set':'B','level':5},            
            3:{'name':'カラミティ','down_mp':100,'set':'SB1','level':30},            
            4:{'name':'暗黒','down_mp':20,'set':'A1','level':1},
            5:{'name':'暗黒2','down_mp':60,'set':'A2','level':15},
            6:{'name':'暗黒3','down_mp':100,'set':'A3','level':30},            
        },
        ability_2:{
            0:{'name':'ダブルアタック','down_mp':20,'set':'D','level':1},
            1:{'name':'デシメーション','down_mp':60,'set':'S','level':10},            
            2:{'name':'ボーパルブレード','down_mp':60,'set':'B','level':5},            
            3:{'name':'カラミティ','down_mp':100,'set':'SB1','level':30},            
        },
        ability_3:{},
        ability_4:{},
        //敵配列[0~12]
        charas:{
        0:{'name':'ゴブリン','img':'image/teki1.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        1:{'name':'ウォーウルフ','img':'image/teki2.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        2:{'name':'ファイターウルフ','img':'image/teki3.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        3:{'name':'レッドドラゴン','img':'image/teki4.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        4:{'name':'ファイアゴーレム','img':'image/teki5.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        5:{'name':'アイスエレメント','img':'image/teki6.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        6:{'name':'ランスリザード','img':'image/teki7.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        7:{'name':'ドワーフ','img':'image/teki8.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        8:{'name':'ウォーバード','img':'image/teki9.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        9:{'name':'アクスソルジャー','img':'image/teki10.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},
        10:{'name':'ゴーレム','img':'image/teki11.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},            
        11:{'name':'ダークドラゴン','img':'image/teki12.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},            
        12:{'name':'ゴースト','img':'image/teki13.png','MaxHP':80,'HP':80,'KHP':80,'MP':30,'counter':0,'hp_counter':1,'bt_counter':0,
            'damage':0,'damage_img':0,'d_image':"",'motion':""},                    
        },
        //戦闘時的配列
        battle_chara:[],
    }
},created:function(){
    var _this = this;
//****************読み込み時に敵キャラ4体を配置*************************//
    var ran = Math.floor( Math.random() * 8);
    _this.battle_chara[0] = _this.charas[ran];
    _this.battle_chara[1] = _this.charas[ran + 1];
    _this.battle_chara[2] = _this.charas[ran + 2];
    _this.battle_chara[3] = _this.charas[ran + 3];
},mounted:function(){
    var _this = this;
//************************画面サイズを変更する*************************//        
    addEventListener('load',this.windowHeight,);
    addEventListener('resize',this.windowHeight,);
//*********************初期装備ステータス反映**************************//    
    _this.item_change();
//*********************歩行画面制御************************************//    
    _this.canvas = _this.$refs.myCanvas;
    //canvasを取得する
    var ctx = _this.canvas.getContext('2d');
    //操作キャラを作成
    var chara = new Object();
    //キャラの画像を作成
    chara.img = new Image();
    var img_f = 'image/move_f.png';
    var img_b = 'image/move_b.png';
    var img_l = 'image/move_l.png';
    var img_r = 'image/move_r.png';
    //キャラの初期の位置・画像
    chara.img.src = img_f;
    chara.x = 40;
    chara.y = 40;
    chara.move = 0;
    //マップチップのImageオブジェクトを作る
    var mapchip = new Image();
    mapchip.src = 'image/map.png';
    //表示マップ
    var map = [];
    //切替マップ
    var map1 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,1],
	[1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1],
	[1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1],
	[1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1],
	[1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
    var map2 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
	[1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1],
	[1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1],
	[1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,3,1],
	[1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1],
	[1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1],
	[1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
    var map3 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
	[1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1],
	[1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1],
	[1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1],
	[1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,3,1],
	[1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
    var map4 = [
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,2,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1],
	[1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,3,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1],
	[1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1],
	[1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1],
	[1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1],
	[1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
	[1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1],
	[1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1],
	[1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]
    //ページ推移用
    var reset_map = [
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
	[5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
]
    //マップ切り替え関数
    function random(){
        var ran = Math.floor(Math.random()*4);
        switch (ran) {
            case 0:
                map = map1;
                break;
            case 1:
                map = map2;
            break;
            case 2:
                map= map3;
            break;
            case 3:
                map= map4;
            break;            
    }
    //１階の時だけ上り階段を消す
    if(_this.main_counter1 === 1){
        for(var j = 0;j < map.length;j++){
            for(var i = 0;i < map[j].length;i++){
                if(map[j][i] === 2) map[j][i] = 0;
            }
        }
    } else {
        map[1][1] = 2;
    }
};
    //階層を上がる場合の降り階段の位置を判定
    function down_chara(){
        for(var j = 0;j < map.length;j++){
            for(var i = 0;i < map[j].length;i++){
                if(map[j][i] === 3) return [i,j];
            }
        }
    }
    //マップリセット＆カウント 0↑ 1↓
    function map_reset(nam){
        map = reset_map;
	    chara.img.src= "";
	    setTimeout(function(){
		    random();
		chara.img.src = img_f;
		if(nam == 1){
		     chara.x = 40;
	         chara.y = 80;
		    _this.main_counter1++;
	    } else {
	        chara.x = down_chara()[0] * 40;
	        chara.y = down_chara()[1] * 40;
	        if(_this.main_counter1 > 1) _this.main_counter1--;
	    }
	        //１階の時だけ上り階段を消す
    if(_this.main_counter1 === 1){
        for(var j = 0;j < map.length;j++){
            for(var i = 0;i < map[j].length;i++){
                if(map[j][i] === 2) map[j][i] = 0;
            }
        }
    } else {
        map[1][1] = 2;
    }
	},600);
}
    //初期マップ配置
    random();
    //キーボードのオブジェクトを作成
    var key = new Object();
    key.up = false;
    key.down = false;
    key.right = false;
    key.left = false;
    key.push = '';
    var mp_counter = true;
    //メインループ
function main() {
	//塗りつぶす色を指定（してい)
	ctx.fillStyle = "rgb( 0, 0, 0 )";
	//塗りつぶす
	ctx.fillRect(0, 0, 960, 640);
	for (var y=0; y<map.length; y++) {
		for (var x=0; x<map[y].length; x++) {
			if ( map[y][x] === 0 ) ctx.drawImage( mapchip, 0, 0, 40, 40, 40*x, 40*y, 40, 40 ); //フィールド
			if ( map[y][x] === 1 ) ctx.drawImage( mapchip, 40, 0, 40, 40, 40*x, 40*y, 40, 40 ); //壁
			if ( map[y][x] === 2 ) ctx.drawImage( mapchip, 80, 0, 40, 40, 40*x, 40*y, 40, 40 ); //上り階段
			if ( map[y][x] === 3 ) ctx.drawImage( mapchip, 120, 0, 40, 40, 40*x, 40*y, 40, 40 ); //降り階段
		}
	}
	//画像を表示
	ctx.drawImage( chara.img, chara.x, chara.y );
	//画面十字キー制御
	switch(_this.mouseOn) {
	    case 37:
	        keydownfunc(37);
	        break;
	    case 38:
	        keydownfunc(38);
	        break;
	    case 39:
	        keydownfunc(39);
	        break;
	    case 40:
	        keydownfunc(40);
	        break;
	}
	//画面十字キー制御
	switch(_this.mouseOut) {
	    case 37:
	        keyupfunc(37);
	        break;
	    case 38:
	        keyupfunc(38);
	        break;
	    case 39:
	        keyupfunc(39);
	        break;
	    case 40:
	        keyupfunc(40);
	        break;
	}
	//PC用十字キー制御
	addEventListener("keydown", keydownfunc, false);
	addEventListener("keyup", keyupfunc, false);
	if ( chara.move === 0 ) {
		if ( key.left === true ) {
			var x = chara.x/40;
			var y = chara.y/40;
			x--;
			if(map[0][0] != 5) chara.img.src = img_l;
			if ( map[y][x] != 1 ) {
				    if(map[y][x] == 3){
				        map_reset(1);
				    } else if(map[y][x] == 2){
				        map_reset(0);
				    }			    
				chara.move = 40;
				key.push = 'left';
			}
		}
		if ( key.up === true ) {
			var x = chara.x/40;
			var y = chara.y/40;
			if ( y > 0) {
			    if(map[0][0] != 5) chara.img.src = img_b;
				y--;
				if ( map[y][x] != 1 ) {
				    if(map[y][x] == 3){
				        map_reset(1);
				    } else if(map[y][x] == 2){
				        map_reset(0);
				    }				    
					chara.move = 40;
					key.push = 'up';
				}
			}
		}
		if ( key.right === true ) {
			var x = chara.x/40;
			var y = chara.y/40;
			x++;
			if(map[0][0] != 5) chara.img.src = img_r;
			if ( map[y][x] != 1 ) {
				    if(map[y][x] == 3){
				        map_reset(1);
				    } else if(map[y][x] == 2){
				        map_reset(0);
				    }			    
				chara.move = 40;
				key.push = 'right';
			}
		}
		if ( key.down === true ) {
			var x = chara.x/40;
			var y = chara.y/40;
			if(map[0][0] != 5)  chara.img.src = img_f;
			if ( y < 19 ) {
				y++;
				if ( map[y][x] != 1 ) {
				    if(map[y][x] == 3){
				        map_reset(1);
				    } else if(map[y][x] == 2){
				        map_reset(0);
				    }	
					chara.move = 40;
					key.push = 'down';
				}
			}
		}
	}
	//chara.moveが0より大きい場合は、2pxずつ移動を続ける
	if (chara.move > 0) {
	    if(map[0][0] != 5){
	   //1歩毎にエンカウント判定     
	        if(chara.move == 40){
		        for(var i = 0;i < Object.keys(_this.users).length;i++){
		        var user = "";
		            switch (i) {
		                case 0:
		                    user = _this.users.user_1;
		                    break;
		                case 1:
		                    user = _this.users.user_2;
		                    break;
		                case 2:
		                    user = _this.users.user_3;
		                    break;
		                case 3:
		                    user = _this.users.user_4;
		                    break;
		     }
		    //1歩毎にHP回復 
		    if(user.HP < user.MaxHP){
		        user.HP = user.HP + 1;
		    }
		    //2歩毎にMP回復
		    if(user.MP < user.MaxMP){
		        if(mp_counter){
		            user.MP = user.MP + 1;
		        }
		    }
		} 
		mp_counter = !mp_counter;
	//エンカウント率3.3%
        var ran = Math.floor(Math.random()*30);
		    if(ran == 0){
		        _this.scale = 0;
		        //エンカウント後、画面推移
		        setTimeout(function(){
		            _this.window_counter = true;    
		        },1000);
		    }
		}
		chara.move -= 4;
		if ( key.push === 'left' ) chara.x -= 4;
		if ( key.push === 'up' ) chara.y -= 4;
		if ( key.push === 'right' ) chara.x += 4;
		if ( key.push === 'down' ) chara.y += 4;
	    } else {
	        chara.move = 0;
	    }
	}
 
	requestAnimationFrame( main );
}
//ページと依存している全てのデータが読み込まれたら、メインループ開始
addEventListener('load', main(), false);
 
//キーボードが押されたときに呼び出される
function keydownfunc( event ) {
    if(event.keyCode){
        var key_code = event.keyCode;    
    } else {
        key_code = event;
    }
	if( key_code === 37 ) key.left = true;
	if( key_code === 38 ) key.up = true;
	if( key_code === 39 ) key.right = true;
	if( key_code === 40 ) key.down = true;
	if(event.keyCode){
	event.preventDefault();
	}
}
 
//キーボードが放されたときに呼び出される
function keyupfunc( event ) {
	    if(event.keyCode){
        var key_code = event.keyCode;    
    } else {
        key_code = event;
    }
	if( key_code === 37 ) key.left = false;
	if( key_code === 38 ) key.up = false;
	if( key_code === 39 ) key.right = false;
	if( key_code === 40 ) key.down = false;
}    
},methods:{
//windowサイズ変更と端末判定    
windowHeight:function(){
    var _this = this;
    this.window_height = window.innerHeight;
    this.window_width = window.innerWidth;
    var regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    if(window.navigator.userAgent.search(regexp) !== -1){
        _this.margin = -34;
        _this.padding_top = 10;
    }else{
        _this.margin = (_this.window_height - 640)/2;
        _this.padding_top = 70;
    }
},
//**************アイテム変更処理***********************//
item_change:function(){
    var _this = this;
    var item = [];
    switch (_this.change_user) {
        case 'u1_equip':
            item = _this.u1_equip[_this.remove_item];
            _this.$set(_this.u1_equip,[_this.remove_item], _this.set_item);
            break;
        case 'u2_equip':
            item = _this.u2_equip[_this.remove_item];
            _this.$set(_this.u2_equip,[_this.remove_item], _this.set_item);
            break;
        case 'u3_equip':
            item = _this.u3_equip[_this.remove_item];
            _this.$set(_this.u3_equip,[_this.remove_item], _this.set_item);
            break;
        case 'u4_equip':
            item = _this.u4_equip[_this.remove_item];
            _this.$set(_this.u4_equip,[_this.remove_item], _this.set_item);
            break;
    }
        switch (_this.item_category) {
        case 'weapon':
            _this.$set(_this.weapon_box,[_this.set_index],item);
            break;
        case 'shield':
            _this.$set(_this.shield_box,[_this.set_index],item);
            break;
        case 'armor':
            _this.$set(_this.armor_box,[_this.set_index],item);
            break;
        case 'ring':
            _this.$set(_this.ring_box,[_this.set_index],item);
            break;
    }
//現在の状態のリセット
    for(var i = 0;i < Object.keys(_this.users).length;i++){
        var user = "";
        switch (i) {
            case 0:
                user = _this.users.user_1;
                break;
            case 1:
                user = _this.users.user_2;
                break;
            case 2:
                user = _this.users.user_3;
                break;
            case 3:
                user = _this.users.user_4;
                break;
        }
        user.Uap = 0;
        user.Udp = 0;
        user.Uhp = 0;
        user.Ump = 0;
        user.Uma = 0;
        user.Umd = 0;
    }
    for(var i = 0;i <= 3;i++){
        switch (_this.u1_equip[i][1]) {
            case '攻':
                _this.users.user_1.Uap = Number(_this.users.user_1.Uap) + Number(_this.u1_equip[i][2]);
                break;
            case '防':
                _this.users.user_1.Udp = Number(_this.users.user_1.Udp) + Number(_this.u1_equip[i][2]);
                break;
            case 'HP':
                _this.users.user_1.Uhp = Number(_this.users.user_1.Uhp) + Number(_this.u1_equip[i][2]);
                break;
            case 'MP':
                _this.users.user_1.Ump = Number(_this.users.user_1.Ump) + Number(_this.u1_equip[i][2]);
                break;
            case '魔':
                _this.users.user_1.Uma = Number(_this.users.user_1.Uma) + Number(_this.u1_equip[i][2]);
                break;
            case '抗':
                _this.users.user_1.Umd = Number(_this.users.user_1.Umd) + Number(_this.u1_equip[i][2]);
                break;
        }
    }
    for(var i = 0;i <= 3;i++){
        switch (_this.u2_equip[i][1]) {
            case '攻':
                _this.users.user_2.Uap = Number(_this.users.user_2.Uap) + Number(_this.u2_equip[i][2]);
                break;
            case '防':
                _this.users.user_2.Udp = Number(_this.users.user_2.Udp) + Number(_this.u2_equip[i][2]);
                break;
            case 'HP':
                _this.users.user_2.Uhp = Number(_this.users.user_2.Uhp) + Number(_this.u2_equip[i][2]);
                break;
            case 'MP':
                _this.users.user_2.Ump = Number(_this.users.user_2.Ump) + Number(_this.u2_equip[i][2]);
                break;
            case '魔':
                _this.users.user_2.Uma = Number(_this.users.user_2.Uma) + Number(_this.u2_equip[i][2]);
                break;
            case '抗':
                _this.users.user_2.Umd = Number(_this.users.user_2.Umd) + Number(_this.u2_equip[i][2]);
                break;
        }
    }
    for(var i = 0;i <= 3;i++){
        switch (_this.u3_equip[i][1]) {
            case '攻':
                _this.users.user_3.Uap = Number(_this.users.user_3.Uap) + Number(_this.u3_equip[i][2]);
                break;
            case '防':
                _this.users.user_3.Udp = Number(_this.users.user_3.Udp) + Number(_this.u3_equip[i][2]);
                break;
            case 'HP':
                _this.users.user_3.Uhp = Number(_this.users.user_3.Uhp) + Number(_this.u3_equip[i][2]);
                break;
            case 'MP':
                _this.users.user_3.Ump = Number(_this.users.user_3.Ump) + Number(_this.u3_equip[i][2]);
                break;
            case '魔':
                _this.users.user_3.Uma = Number(_this.users.user_3.Uma) + Number(_this.u3_equip[i][2]);
                break;
            case '抗':
                _this.users.user_3.Umd = Number(_this.users.user_3.Umd) + Number(_this.u3_equip[i][2]);
                break;
        }
    }
    for(var i = 0;i <= 3;i++){
        switch (_this.u4_equip[i][1]) {
            case '攻':
                _this.users.user_4.Uap = Number(_this.users.user_4.Uap) + Number(_this.u4_equip[i][2]);
                break;
            case '防':
                _this.users.user_4.Udp = Number(_this.users.user_4.Udp) + Number(_this.u4_equip[i][2]);
                break;
            case 'HP':
                _this.users.user_4.Uhp = Number(_this.users.user_4.Uhp) + Number(_this.u4_equip[i][2]);
                break;
            case 'MP':
                _this.users.user_4.Ump = Number(_this.users.user_4.Ump) + Number(_this.u4_equip[i][2]);
                break;
            case '魔':
                _this.users.user_4.Uma = Number(_this.users.user_4.Uma) + Number(_this.u4_equip[i][2]);
                break;
            case '抗':
                _this.users.user_4.Umd = Number(_this.users.user_4.Umd) + Number(_this.u4_equip[i][2]);
                break;
        }
    }
    this.reset_status();
},
//**************ステータス上昇&カウンターリセット*****************//
up_reset:function(){
    for(var j = 0;j < this.counter.length;j++){
        for(var i = 0;i < this.counter[0].length;i++){
        this.counter[j][i] = 0;  
        }
    }
    for(var k = 0;k < this.status_up.length;k++){
        for(var j = 0;j < this.status_up[k].length;j++){
            for(var i = 0;i < this.status_up[k][j].length;i++){
                this.status_up[k][j][i] = 0;
            }
        }
    }
},
//***************カウンター減少*************************************//
count_down:function(){
    var _this = this;
    var log = _this.log;
    for(var j = 0;j < _this.counter.length;j++){
        for(var i = 0;i < _this.counter[0].length;i++){
            if(_this.counter[j][i] == 1){
                switch (i) {
                    case 0:
                        _this.status_up[j][1][0] = 0;
                        _this.log = "<br><span>プロテスの効果がきれた</span>" + _this.log;
                        break;
                    case 1:
                        _this.status_up[j][3][0] = 0;
                        _this.log = "<br><span>シェルの効果がきれた</span>" + _this.log;
                        break;
                    case 2:
                        _this.status_up[j][0][0] = 0;
                        _this.status_up[j][1][1] = 0;
                        _this.log = "<br><span>バーサクの効果がきれた</span>" + _this.log;
                        break;
                    case 3:
                        _this.status_up[j][1][1] = 0;
                        _this.status_up[j][1][2] = 0;
                        _this.log = "<br><span>ディフェンダーの効果がきれた</span>" + _this.log;
                        break;
                    case 4:
                        _this.log = "<br><span>挑発の効果がきれた</span>" + _this.log;
                        break;
                }
            }
            if(_this.counter[j][i] > 0){
                _this.counter[j][i] = _this.counter[j][i] - 1;
            }
        }
    }
},
//*******************装備ステータス反映*************************************//
reset_status:function(){
    var _this = this;
    var user = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ];
    for(var k = 0;k < _this.status_up.length;k++){
       for(var j = 0;j < _this.status_up[k].length;j++){
            for(var i = 0;i < _this.status_up[k][j].length;i++){
                user[k][j] = Number(user[k][j]) + Number(_this.status_up[k][j][i]);
            }
        }
    }
    //戦士用
    _this.users.user_1.MaxHP = Number(_this.users.user_1.Khp) + Number(_this.users.user_1.Uhp);
    _this.users.user_1.MaxMP = Number(_this.users.user_1.Kmp) +Number( _this.users.user_1.Ump);
    _this.users.user_1.aP = Number(_this.users.user_1.Kap) + Number(_this.users.user_1.Uap) + Number(user[0][0]);
    _this.users.user_1.dP = Number(_this.users.user_1.Kdp) + Number(_this.users.user_1.Udp) + Number(user[0][1]);;
    _this.users.user_1.mP = Number(_this.users.user_1.Kma) + Number(_this.users.user_1.Uma) + Number(user[0][2]);;
    _this.users.user_1.mD = Number(_this.users.user_1.Kmd) + Number(_this.users.user_1.Umd) + Number(user[0][3]);;
    //ナイト用
    _this.users.user_2.MaxHP = Number(_this.users.user_2.Khp) + Number(_this.users.user_2.Uhp);
    _this.users.user_2.MaxMP = Number(_this.users.user_2.Kmp) +Number( _this.users.user_2.Ump);
    _this.users.user_2.aP = Number(_this.users.user_2.Kap) + Number(_this.users.user_2.Uap) + Number(user[1][0]);;
    _this.users.user_2.dP = Number(_this.users.user_2.Kdp) + Number(_this.users.user_2.Udp) + Number(user[1][1]);;
    _this.users.user_2.mP = Number(_this.users.user_2.Kma) + Number(_this.users.user_2.Uma) + Number(user[1][2]);;
    _this.users.user_2.mD = Number(_this.users.user_2.Kmd) + Number(_this.users.user_2.Umd) + Number(user[1][3]);;
    //白魔導士用
    _this.users.user_3.MaxHP = Number(_this.users.user_3.Khp) + Number(_this.users.user_3.Uhp);
    _this.users.user_3.MaxMP = Number(_this.users.user_3.Kmp) +Number( _this.users.user_3.Ump);
    _this.users.user_3.aP = Number(_this.users.user_3.Kap) + Number(_this.users.user_3.Uap) + Number(user[2][0]);;
    _this.users.user_3.dP = Number(_this.users.user_3.Kdp) + Number(_this.users.user_3.Udp) + Number(user[2][1]);;
    _this.users.user_3.mP = Number(_this.users.user_3.Kma) + Number(_this.users.user_3.Uma) + Number(user[2][2]);;
    _this.users.user_3.mD = Number(_this.users.user_3.Kmd) + Number(_this.users.user_3.Umd) + Number(user[2][3]);;
    //黒魔導士用
    _this.users.user_4.MaxHP = Number(_this.users.user_4.Khp) + Number(_this.users.user_4.Uhp);
    _this.users.user_4.MaxMP = Number(_this.users.user_4.Kmp) +Number( _this.users.user_4.Ump);
    _this.users.user_4.aP = Number(_this.users.user_4.Kap) + Number(_this.users.user_4.Uap) + Number(user[3][0]);;
    _this.users.user_4.dP = Number(_this.users.user_4.Kdp) + Number(_this.users.user_4.Udp) + Number(user[3][1]);;
    _this.users.user_4.mP = Number(_this.users.user_4.Kma) + Number(_this.users.user_4.Uma) + Number(user[3][2]);;
    _this.users.user_4.mD = Number(_this.users.user_4.Kmd) + Number(_this.users.user_4.Umd) + Number(user[3][3]);;    
},
//*************Userの攻撃処理 *****************// 
attackU:function(fn,user,action,mp,a_user){
// 引数:fn 呼び出す関数を指定 // 引数:user 行動するuserを指定 //引数 action 行動コマンドを指定 null = 通常攻撃 //引数 a_user 補助を受けるuserを指定    
        var _this = this;
//*************ドロップアイテムをセット*****************//
var nam = 0;
//階層によりドロップアイテムのランクを上昇させる
if(_this.drop_item.length == 0){
    if(_this.main_counter1 > 0 && _this.main_counter1 <= 10){nam = 0;}
    else if(_this.main_counter1 >= 11 && _this.main_counter1 <= 20){nam = 1;}
    else if(_this.main_counter1 >= 21 && _this.main_counter1 <= 30){nam = 2;}
    else if(_this.main_counter1 >= 31 && _this.main_counter1 <= 40){nam = 3;}
    else if(_this.main_counter1 >= 41 && _this.main_counter1 <= 50){nam = 4;}
    else if(_this.main_counter1 >= 51 && _this.main_counter1 <= 60){nam = 5;}
    else if(_this.main_counter1 >= 61 && _this.main_counter1 <= 70){nam = 6;}
    else if(_this.main_counter1 >= 71 && _this.main_counter1 <= 80){nam = 7;}
    else if(_this.main_counter1 >= 81 && _this.main_counter1 <= 90){nam = 8;}
    else if(_this.main_counter1 >= 91 && _this.main_counter1 <= 100 ){nam = 9;}
    _this.drop_item.push(_this.weapon1[nam]);
    _this.drop_item.push(_this.weapon2[nam]);
    _this.drop_item.push(_this.shield1[nam]);
    _this.drop_item.push(_this.shield2[nam]);
    _this.drop_item.push(_this.armor1[nam]);
    _this.drop_item.push(_this.ring1[nam]);
    _this.drop_item.push(_this.ring2[nam]);
    _this.drop_item.push(_this.ring3[nam]);
    _this.drop_item.push(_this.ring4[nam]);
    _this.drop_item.push(_this.ring5[nam]);
    _this.drop_item.push(_this.ring6[nam]);
}            
//******アクションを起こせない場合は再度戦闘コマンドに移る*****//
    switch (fn) {
        case 'A':
            if(this.attackEventUser(user,action,mp) == false){
            _this.action = "";
            return;
            }
            break;
        case 'B':        
            if(this.assistEventUser(user,action,mp,a_user) == false){
            _this.action = "";
            return;
            }
            break;
    }
//************勝利判定**************************//
    if(_this.battle_chara[0].HP <= 0 && _this.battle_chara[1].HP <= 0 && _this.battle_chara[2].HP <= 0 && _this.battle_chara[3].HP <= 0){
        //全敵キャラのHP0になった場合の処理// 
        _this.log = "<br><span class='get_log'>勝利しました！</span>" + _this.log;
        //ドロップアイテムリセット
        _this.drop_item = [];
        //ステータスupの効果を解除
        _this.up_reset();
        //解除ステータス反映
        _this.reset_status();
        if(_this.get_item != 0){
        for(i = 0;i < _this.get_item.length;i++){
            var category = _this.get_item[i][3];
            switch (category) {
                case 'w':
                    _this.weapon_box.push(_this.get_item[i]);
                    break;
                case 's':
                    _this.shield_box.push(_this.get_item[i]);
                    break;
                case 'a':
                    _this.armor_box.push(_this.get_item[i]);
                    break;
                case 'r':
                    _this.ring_box.push(_this.get_item[i]);
                    break;
            }
        }
        //獲得アイテムリセット
        _this.get_item = [];
    }
    //敵キャラステータス上昇用のカウンター    
//************経験値獲得***********************//            
        _this.users.user_1.exp = _this.users.user_1.exp - _this.exp;
        _this.users.user_2.exp = _this.users.user_2.exp - _this.exp;
        _this.users.user_3.exp = _this.users.user_3.exp - _this.exp;
        _this.users.user_4.exp = _this.users.user_4.exp - _this.exp;
        //****獲得経験値の初期化****//    
        _this.exp = 0;
//***********レベルアップ*********************//
        if(_this.users.user_1.exp <= 0){
        //******戦士用*********//
        //レベルアップと基本ステータスアップ
            _this.users.user_1.level = _this.users.user_1.level + 1;
            _this.users.user_1.Khp = _this.users.user_1.Khp + 20
            _this.users.user_1.Kmp = _this.users.user_1.Kmp + 5
            _this.users.user_1.Kap = _this.users.user_1.Kap + 10
            _this.users.user_1.Kdp = _this.users.user_1.Kdp + 8
            _this.users.user_1.Kma = _this.users.user_1.Kma + 4
            _this.users.user_1.Kmd = _this.users.user_1.Kmd + 4
            //次の経験値をセット
            _this.users.user_1.exp = 100 * _this.users.user_1.level;
        }
        if(_this.users.user_2.exp <= 0){
        //******ナイト用*********//
        //レベルアップと基本ステータスアップ
            _this.users.user_2.level = _this.users.user_2.level + 1;
            _this.users.user_2.Khp = _this.users.user_2.Khp + 18
            _this.users.user_2.Kmp = _this.users.user_2.Kmp + 7
            _this.users.user_2.Kap = _this.users.user_2.Kap + 6
            _this.users.user_2.Kdp = _this.users.user_2.Kdp + 10
            _this.users.user_2.Kma = _this.users.user_2.Kma + 4
            _this.users.user_2.Kmd = _this.users.user_2.Kmd + 6
            //次の経験値をセット
            _this.users.user_2.exp = 100 * _this.users.user_2.level;
        }
        if(_this.users.user_3.exp <= 0){
        //******白魔導士用*********//
            //レベルアップと基本ステータスアップ
            _this.users.user_3.level = _this.users.user_3.level + 1;
            _this.users.user_3.Khp = _this.users.user_3.Khp + 15
            _this.users.user_3.Kmp = _this.users.user_3.Kmp + 10
            _this.users.user_3.Kap = _this.users.user_3.Kap + 5
            _this.users.user_3.Kdp = _this.users.user_3.Kdp + 7
            _this.users.user_3.Kma = _this.users.user_3.Kma + 7
            _this.users.user_3.Kmd = _this.users.user_3.Kmd + 7
            //次の経験値をセット
            _this.users.user_3.exp = 100 * _this.users.user_3.level;
        }
        if(_this.users.user_4.exp <= 0){
        //******黒魔導士用*********//    
            //レベルアップと基本ステータスアップ
            _this.users.user_4.level = _this.users.user_4.level + 1;
            _this.users.user_4.Khp = _this.users.user_4.Khp + 10
            _this.users.user_4.Kmp = _this.users.user_4.Kmp + 15
            _this.users.user_4.Kap = _this.users.user_4.Kap + 4
            _this.users.user_4.Kdp = _this.users.user_4.Kdp + 4
            _this.users.user_4.Kma = _this.users.user_4.Kma + 10
            _this.users.user_4.Kmd = _this.users.user_4.Kmd + 8
            //次の経験値をセット
            _this.users.user_4.exp = 100 * _this.users.user_4.level;
        }
        //*****ステータス反映********//
        this.reset_status();
        setTimeout(function() {
            _this.window_counter = false;
            _this.scale = 1;
        },2000)
//**********敵キャラを再度セット***************//
        setTimeout(function() {
//***********敵キャラHPの初期化****************//            
            for(var i = 0;i < _this.battle_chara.length;i++){
                _this.battle_chara[i].HP = _this.battle_chara[i].MaxHP;
                _this.battle_chara[i].hp_counter = 1;
            }
            _this.battle_chara = [];
            var ran = Math.floor( Math.random() * 8);
            _this.battle_chara[0] = _this.charas[ran];
            _this.battle_chara[1] = _this.charas[ran + 1];
            _this.battle_chara[2] = _this.charas[ran + 2];
            _this.battle_chara[3] = _this.charas[ran + 3];
            for(var i = 0;i <= 3;i++){
        //敵キャラ再編成時にカウンターに応じてステータスを上げる
            _this.battle_chara[i].HP = _this.battle_chara[i].KHP + Math.floor(_this.battle_chara[i].KHP /6 * _this.main_counter1);
            _this.battle_chara[i].MaxHP = _this.battle_chara[i].KHP + Math.floor(_this.battle_chara[i].KHP /6 * _this.main_counter1);
            console.log(_this.battle_chara[i].HP);
            }
        //バトルカウンターリセット//        
            _this.users.user_1.bt_counter = 1;
            _this.users.user_2.bt_counter = 1;
            _this.users.user_3.bt_counter = 1;
            _this.users.user_4.bt_counter = 1;
        //勝利時に残HPが0であればHP10%をセットする    
            if(_this.users.user_1.HP == 0){
                _this.users.user_1.HP = Math.floor(_this.users.user_1.MaxHP * 0.1);
                _this.users.user_1.img = 'image/chara1.png';
            }
            if(_this.users.user_2.HP == 0){
                _this.users.user_2.HP = Math.floor(_this.users.user_2.MaxHP * 0.1);
                _this.users.user_2.img = 'image/chara2.png';
            }
            if(_this.users.user_3.HP == 0){
                _this.users.user_3.HP = Math.floor(_this.users.user_3.MaxHP * 0.1);
                _this.users.user_3.img = 'image/chara3.png';
            }
            if(_this.users.user_4.HP == 0){
                _this.users.user_4.HP = Math.floor(_this.users.user_4.MaxHP * 0.1);
                _this.users.user_4.img = 'image/chara4.png';
            }
        },2000);
    } else {
        if(this.users.user_1.bt_counter == 1 || this.users.user_2.bt_counter == 1 || this.users.user_3.bt_counter == 1 || this.users.user_4.bt_counter == 1){
        //userの何れかのキャラが行動出来る場合は再度行動選択する
            return;
        } else {
            for(var i = 0;i < _this.battle_chara.length;i++){
        //敵キャラの残HPがあれば敵キャラにバトルカウンターを渡す        
                if(_this.battle_chara[i].HP > 0){
                    _this.battle_chara[i].bt_counter = 1;
                }
            }
        }
        setTimeout(function() {
        //敵キャラの攻撃関数を実行    
          _this.attackC();  
        },1000);
    }
},attackC:function(event){
        var _this = this;
        setTimeout(this.attackEvent,500);
//**************************全滅時処理**************************************//
},zenmetu:function(){
        var _this = this;
        _this.log = "<br><span class='chara_down'>全滅しました</span>"
        //獲得アイテムリセット
        _this.get_item = [];
        //*****ステータス反映********//
        this.reset_status();
        setTimeout(function() {
            _this.window_counter = false;
            _this.scale = 1;
},2000)
//**********敵キャラを再度セット***************//
        setTimeout(function() {
//***********敵キャラHPの初期化****************//            
            for(var i = 0;i < _this.battle_chara.length;i++){
                _this.battle_chara[i].HP = _this.battle_chara[i].MaxHP;
                _this.battle_chara[i].hp_counter = 1;
            }
            _this.battle_chara = [];
            var ran = Math.floor( Math.random() * 8);
            _this.battle_chara[0] = _this.charas[ran];
            _this.battle_chara[1] = _this.charas[ran + 1];
            _this.battle_chara[2] = _this.charas[ran + 2];
            _this.battle_chara[3] = _this.charas[ran + 3];
            for(var i = 0;i <= 3;i++){
        //敵キャラ再編成時にカウンターに応じてステータスを上げる
            _this.battle_chara[i].HP = _this.battle_chara[i].KHP + Math.floor(_this.battle_chara[i].KHP /6 * _this.main_counter1);
            _this.battle_chara[i].MaxHP = _this.battle_chara[i].KHP + Math.floor(_this.battle_chara[i].KHP /6 * _this.main_counter1);
            }
        //バトルカウンターリセット//        
            _this.users.user_1.bt_counter = 1;
            _this.users.user_2.bt_counter = 1;
            _this.users.user_3.bt_counter = 1;
            _this.users.user_4.bt_counter = 1;
        //勝利時に残HPが0であればHP10%をセットする    
            if(_this.users.user_1.HP == 0){
                _this.users.user_1.HP = Math.floor(_this.users.user_1.MaxHP * 0.1);
                _this.users.user_1.img = 'image/chara1.png';
            }
            if(_this.users.user_2.HP == 0){
                _this.users.user_2.HP = Math.floor(_this.users.user_2.MaxHP * 0.1);
                _this.users.user_2.img = 'image/chara2.png';
            }
            if(_this.users.user_3.HP == 0){
                _this.users.user_3.HP = Math.floor(_this.users.user_3.MaxHP * 0.1);
                _this.users.user_3.img = 'image/chara3.png';
            }
            if(_this.users.user_4.HP == 0){
                _this.users.user_4.HP = Math.floor(_this.users.user_4.MaxHP * 0.1);
                _this.users.user_4.img = 'image/chara4.png';
            }
        },2000);        

//**************************敵攻撃用****************************************//        
},attackEvent:function(random){
        var _this = this;
        var damege = 0;
        var damege_str = "";
        var damage_img = "";
        var target_user = [];
        var active_chara = "";
    //敵キャラ配列の先頭からバトルカウンターがあれば行動キャラにセットする    
        if(_this.battle_chara[0].bt_counter == 1){
            active_chara = _this.battle_chara[0];
        } else if(_this.battle_chara[1].bt_counter == 1){
            active_chara = _this.battle_chara[1];
        } else if(_this.battle_chara[2].bt_counter == 1){
            active_chara = _this.battle_chara[2];
        } else {
            active_chara = _this.battle_chara[3];
        }
    //攻撃時のモーションを実行する    
        _this.$set(active_chara,'motion','translateX(70px) scale(-1,1)');
        setTimeout(function() {
            _this.$set(active_chara,'motion','translateX(0px) scale(-1,1)');
        },700);
    //自キャラの残HPがあるキャラをターゲット選択用の配列に格納する    
        if(_this.users.user_1.HP > 0){
            target_user.push(0);
        }
        if(_this.users.user_2.HP > 0){
            target_user.push(1);
        }
        if(_this.users.user_3.HP > 0){
            target_user.push(2);
        }
        if(_this.users.user_4.HP > 0){
            target_user.push(3);
        }
//全滅時の処理      
        if(target_user.length === 0){
            _this.zenmetu();
            return;
        }
    //ランダムで選択して配列番号を抜き出す   
        var ran =  Math.floor( Math.random() * target_user.length);
        var random = target_user[ran];
    //選択された配列番号に応じてターゲットをセットする   
        switch (random) {
            case 0:
                target_user = _this.users.user_1;
                break;
            case 1:
                target_user = _this.users.user_2;
                break;
            case 2:
                target_user = _this.users.user_3;
                break;
            case 3:
                target_user = _this.users.user_4;
                break;
        }
    //挑発制御 //後優先
    for(var i = 0;i < _this.counter.length;i++){
        if(_this.counter[i][4] > 0){
            var c_user = i;
            switch (c_user) {
            case 0:
                if(_this.users.user_1.HP > 0){
                target_user = _this.users.user_1;
                }
                break;
            case 1:
                if(_this.users.user_2.HP > 0){
                target_user = _this.users.user_2;
                }
                break;
            case 2:
                if(_this.users.user_3.HP > 0){
                target_user = _this.users.user_3;
                }
                break;
            case 3:
                if(_this.users.user_4.HP > 0){
                target_user = _this.users.user_4;
                }
                break;
            }
        }
    }
    //ランダムに攻撃イベントを選択    
        var random =  Math.floor( Math.random() * 6);
        switch (random) {
            case 0:
                 damege = Math.round((100 + (10 *_this.main_counter1)) * 1.11 - target_user.dP);
                 damege_str = "攻撃";
                 damage_img = 'image/motion1.png';
                break;
            case 1:
                 damege = Math.round((100 + (10 *_this.main_counter1)) * 1.22 - target_user.dP);
                 damege_str = "攻撃";
                 damage_img = 'image/motion1.png';
                break;
            case 2:
                 damege = Math.round((100 + (10 *_this.main_counter1)) * 1.28 - target_user.mD);
                 damege_str = "魔法攻撃";
                 damage_img = 'image/motion3.png';　
                break;
            case 3:
                 damege = Math.round((100 + (10 *_this.main_counter1)) * 1.48 - target_user.mD);
                 damege_str = "魔法攻撃";
                 damage_img = 'image/motion4.png';
                break;
            case 4:
                 damege = Math.round((100 + (10 *_this.main_counter1)) * 1.8 - target_user.dP);
                 damege_str = "クリティカル攻撃";
                 damage_img = 'image/motion8.png';
                break;
            case 5:
                 damege = Math.round((100 + (10 *_this.main_counter1)) * 0.8 - target_user.dP);
                 damege_str = "ミス攻撃";
                 damage_img = 'image/motion1.png';
                break;
        }
//**********ダメージ＆ログの生成*************//
if(damege <= 0){
//ダメージが0以下の場合に1を指定    
    damege = 1;
}
//キャラ上にダメージ表示用の値をセット
target_user.damege = damege;
target_user.HP = target_user.HP - damege;
_this.$set(target_user, 'damage', damege);
_this.$set(target_user, 'd_image', damage_img);
//**********ダメージ表示＆非表示*************//
_this.$set(target_user, 'counter', 1);
//キャラ上のダメージを表示
    setTimeout(function(){
        _this.$set(target_user, 'counter', 0);
    },400);
_this.$set(target_user, 'damage_img', 1);    
    setTimeout(function(){
//キャラ上のダメージエフェクトを表示        
        _this.$set(target_user, 'damage_img', 0);
    },1000);
//敵キャラのバトルカウンターをリセット    
active_chara.bt_counter = 0;
//ログを表示
_this.log = "<br><span class='chara_log'>" + active_chara.name + "の" + damege_str + target_user.name + "に" + damege + "のダメージ</span>" + _this.log;
//ターゲットのHPが0になった場合に戦闘不能用の画像をセット
if(target_user.HP <= 0){
    setTimeout(function() {
        _this.$set(target_user, 'HP', 0);
        var down_img = "";
        switch (target_user.name) {
            case '戦士':
                down_img = 'image/chara1_down.png';
                break;
            case 'ナイト':
                down_img = 'image/chara2_down.png';
                break;
            case '白魔導士':
                down_img = 'image/chara3_down.png';
                break;
            case '黒魔導士':
                down_img = 'image/chara4_down.png';
                break;
        }
        _this.$set(target_user, 'img', down_img);
    //ログを表示    
        _this.log = "<br><span class='err_log'>" + target_user.name + "は倒れた" + "</span>" + _this.log;
        if(_this.users.user_1.HP == 0 && _this.users.user_2.HP == 0 && _this.users.user_3.HP == 0 && _this.users.user_4.HP == 0){
            _this.zenmetu();
        }
    },1000);
}
//敵キャラのバトルカウンターが残っていれば再度関数を呼び出す
if(_this.battle_chara[0].bt_counter == 1 || _this.battle_chara[1].bt_counter == 1 || _this.battle_chara[2].bt_counter == 1 || _this.battle_chara[3].bt_counter == 1){
setTimeout(this.attackEvent,1000);
 } else {
    //ステータスアップカウンター減少
        _this.count_down();
    //敵キャラのバトルカウンターがなくなった場合に
    //ユーザーの残HPがあればバトルカウンターを渡す
        if(_this.users.user_1.HP > 0){
            _this.users.user_1.bt_counter = 1;
        }
        if(_this.users.user_2.HP > 0){
            _this.users.user_2.bt_counter = 1;
        }
        if(_this.users.user_3.HP > 0){
            _this.users.user_3.bt_counter = 1;
        }
        if(_this.users.user_4.HP > 0){
            _this.users.user_4.bt_counter = 1;
        }
 }
//**********************補助行動用**********************************// 
},assistEventUser:function(user,action,mp,assist_user){
        var _this = this;
        var assist_str = "";
        var down_mp = 0;
        var status_up = 0;
        var d_image = "";
        var motion = "";
        var log = "";
        var index = 10;
        switch (assist_user.name) {
            case '戦士':
                index = 0;
                break;
            case 'ナイト':
                index = 1;
                break;
            case '白魔導士':
                index = 2;
                break;
            case '黒魔導士':
                index = 3;
                break;
        }
    //行動時のモーションを実行    
        _this.$set(user, 'motion', 'translateX(-70px)');
        setTimeout(function() {
            _this.$set(user, 'motion', 'translateX(0px)');
        },700);
        down_mp = mp;
        if(user.MP < mp){
            _this.log = "<br><span class='err_log'>MPが足りません</span>" + _this.log;
            return false;
        } else {
            if(action.length === 3){
                switch (action) {
                    case 'PG1':
                    d_image = 'image/puro1.png';
                    assist_str = "プロテア";
                    status_up = Math.floor(assist_user.dP * 0.15);
                    for(var i = 0;i < _this.counter.length;i++){
                    _this.counter[i][0] = 3;
                    _this.status_up[i][1][0] = status_up;
                    }
                    motion = 'dp';
                    break;
                    case 'KG1':
                    d_image = 'image/kearu1.png';
                    assist_str = "ケアルラ";
                    status_up = Math.floor(user.mP *1.22);
                    motion = 'hp';
                    break;
                    case 'KG2':
                    d_image = 'image/kearu2.png';
                    assist_str = "ケアルラ2";
                    status_up = Math.floor(user.mP *2.22);
                    motion = 'hp';
                    break;
                    case 'KG3':
                    d_image = 'image/kearu3.png';
                    assist_str = "ケアルラ3";
                    status_up = Math.floor(user.mP *3.22);
                    motion = 'hp';
                    break;
                    case 'PG2':
                    d_image = 'image/puro2.png';
                    assist_str = "プロテアⅡ";
                    status_up = Math.floor(assist_user.dP * 0.15);
                    for(var i = 0;i < _this.counter.length;i++){
                    _this.counter[i][0] = 3;
                    _this.status_up[i][1][0] = status_up;
                    }
                    motion = 'dp';
                    break;
                    case 'PG3':
                    d_image = 'image/puro3.png';
                    assist_str = "プロテアⅢ";
                    status_up = Math.floor(assist_user.dP * 0.25);
                    for(var i = 0;i < _this.counter.length;i++){
                    _this.counter[i][0] = 3;
                    _this.status_up[i][1][0] = status_up;
                    }
                    motion = 'dp';
                    break;
                    case 'SG1':
                    d_image = 'image/syeru1.png';
                    assist_str = "シェルラ";
                    status_up = Math.floor(assist_user.mD * 0.30);
                    for(var i = 0;i < _this.counter.length;i++){
                    _this.counter[i][1] = 3;
                    _this.status_up[i][3][0] = status_up;
                    }
                    motion = 'md';
                    break;            
                    case 'SG2':
                    d_image = 'image/syeru2.png';
                    assist_str = "シェルラⅡ";
                    status_up = Math.floor(assist_user.mD * 0.25);
                    for(var i = 0;i < _this.counter.length;i++){
                    _this.counter[i][1] = 3;
                    _this.status_up[i][3][0] = status_up;
                    }
                    motion = 'md';
                    break;                      
                    case 'SG3':
                    d_image = 'image/syeru3.png';
                    assist_str = "シェルラⅢ";
                    status_up = Math.floor(assist_user.mD * 0.30);
                    for(var i = 0;i < _this.counter.length;i++){
                    _this.counter[i][1] = 3;
                    _this.status_up[i][3][0] = status_up;
                    }
                    motion = 'md';
                    break;  
                }
            for(var j = 0;j < Object.keys(_this.users).length;j++){
                switch (j) {
                    case 0:
                        assist_user = _this.users.user_1;
                        break;
                    case 1:
                        assist_user = _this.users.user_2;
                        break;
                    case 2:
                        assist_user = _this.users.user_3;
                        break;
                    case 3:
                        assist_user = _this.users.user_4;
                        break;
                }
            switch (motion) {
                case 'hp':
                    if(assist_user.HP + status_up > assist_user.MaxHP){
                        assist_user.HP = assist_user.MaxHP;
                    } else {
                    _this.$set(assist_user, 'HP', assist_user.HP + status_up);
                    }
                    log = assist_user.name + "のHPが" + status_up + "回復";
                    _this.damage_color = '#00ff55';
                    break;
                case 'mp':
                    if(assist_user.MP + status_up > assist_user.MaxMP){
                        assist_user.MP = assist_user.MaxMP;
                    } else {
                    _this.$set(assist_user, 'MP', assist_user.MP + status_up);
                    }
                    log = assist_user.name + "のMPが" + status_up + "回復";
                    _this.damage_color = '#00ff55';
                    break;                    
                case 'dp':
                    log = assist_user.name + "の防御力が" + status_up + "上昇";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'md':
                    log = assist_user.name + "の魔法御力が" + status_up + "上昇";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'bs':
                    log = assist_user.name + "の攻撃力が" + status_up + "上昇＆防御力ダウン";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'df':
                    log = assist_user.name + "の防御力が" + status_up + "上昇＆攻撃力ダウン";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'ch':
                    log = assist_user.name + "にターゲットが集中！";
                    break;
                }
        _this.log = "<br><span class='user_log'>" + user.name + "の" + assist_str + ":" + log + "</span>" + _this.log;
        //**********ステータス変動表示*************//
        _this.$set(assist_user, 'd_image', d_image);
        _this.$set(assist_user, 'damage', status_up);
        }
//効果表示 
        //user1
        if(motion != 'ch'){     
            _this.$set(_this.users.user_1, 'counter', 1); 
        }
        setTimeout(function(){
            _this.$set(_this.users.user_1, 'counter', 0);
            _this.damage_color = '#ff2600';
        },400);
        _this.$set(_this.users.user_1, 'damage_img', 1);
        setTimeout(function(){
            _this.$set(_this.users.user_1, 'damage_img', 0);
        },1000);
        //user2
        if(motion != 'ch'){     
            _this.$set(_this.users.user_2, 'counter', 1); 
        }
        setTimeout(function(){
            _this.$set(_this.users.user_2, 'counter', 0);
            _this.damage_color = '#ff2600';
        },400);
            _this.$set(_this.users.user_2, 'damage_img', 1);
        setTimeout(function(){
            _this.$set(_this.users.user_2, 'damage_img', 0);
        },1000);
        //user3
        if(motion != 'ch'){     
            _this.$set(_this.users.user_3, 'counter', 1); 
        }
        setTimeout(function(){
            _this.$set(_this.users.user_3, 'counter', 0);
            _this.damage_color = '#ff2600';
        },400);
        _this.$set(_this.users.user_3, 'damage_img', 1);
        setTimeout(function(){
            _this.$set(_this.users.user_3, 'damage_img', 0);
        },1000);
        //user4
        if(motion != 'ch'){     
            _this.$set(_this.users.user_4, 'counter', 1); 
        }
        setTimeout(function(){
            _this.$set(_this.users.user_4, 'counter', 0);
            _this.damage_color = '#ff2600';
        },400);
        _this.$set(_this.users.user_4, 'damage_img', 1);
        setTimeout(function(){
            _this.$set(_this.users.user_4, 'damage_img', 0);
        },1000);
        
    }else {
            switch (action) {
                case 'MS':
                d_image = 'image/tyouhatu.png';
                assist_str = "瞑想";
                status_up = Math.floor(user.MaxMP * 0.18);
                motion = 'mp';
                break;
                case 'K1':
                d_image = 'image/kearu1.png';
                assist_str = "ケアル";
                status_up = Math.floor(user.mP *1.22);
                motion = 'hp';
                break;
                case 'K2':
                d_image = 'image/kearu2.png';
                assist_str = "ケアル2";
                status_up = Math.floor(user.mP *2.22);
                motion = 'hp';
                break;
                case 'K3':
                d_image = 'image/kearu3.png';
                assist_str = "ケアル3";
                status_up = Math.floor(user.mP *3.22);
                motion = 'hp';
                break;
                case 'P1':
                d_image = 'image/puro1.png';
                assist_str = "プロテス";
                status_up = Math.floor(assist_user.dP * 0.15);
                _this.counter[index][0] = 3;
                _this.status_up[index][1][0] = status_up;
                motion = 'dp';
                break;
                case 'P2':
                d_image = 'image/puro2.png';
                assist_str = "プロテス2";
                status_up = Math.floor(assist_user.dP * 0.25);
                _this.counter[index][0] = 3;
                _this.status_up[index][1][0] = status_up;
                motion = 'dp';
                break;
                case 'P3':
                d_image = 'image/puro3.png';
                assist_str = "プロテス3";
                status_up = Math.floor(assist_user.dP * 0.35);
                _this.counter[index][0] = 3;
                _this.status_up[index][1][0] = status_up;
                motion = 'dp';
                break;
                case 'S1':
                d_image = 'image/syeru1.png';
                assist_str = "シェル";
                status_up = Math.floor(assist_user.mD * 0.15);
                _this.counter[index][1] = 3;
                _this.status_up[index][3][0] = status_up;
                motion = 'md';
                break;                
                case 'S2':
                d_image = 'image/syeru2.png';
                assist_str = "シェル2";
                status_up = Math.floor(assist_user.mD * 0.25);
                _this.counter[index][1] = 3;
                _this.status_up[index][3][0] = status_up;
                motion = 'md';
                break;                
                case 'S3':
                d_image = 'image/syeru3.png';
                assist_str = "シェル3";
                status_up = Math.floor(assist_user.mD * 0.35);
                _this.counter[index][1] = 3;
                _this.status_up[index][3][0] = status_up;
                motion = 'md';
                break;                
                case 'BS':
                d_image = 'image/attack_2.png';
                assist_str = "バーサク";
                status_up = Math.floor(assist_user.dP * 0.25);
                _this.counter[index][2] = 3;
                _this.status_up[index][1][1] = (-status_up);
                status_up = Math.floor(assist_user.aP * 0.25);
                _this.counter[index][2] = 3;
                _this.status_up[index][0][0] = status_up;
                motion = 'bs';
                break;         
                case 'DF':
                d_image = 'image/attack_2.png';
                assist_str = "ディフェンダー";
                status_up = Math.floor(assist_user.aP * 0.15);
                _this.counter[index][3] = 3;
                _this.status_up[index][0][2] = (-status_up);
                status_up = Math.floor(assist_user.dP * 0.25);
                _this.counter[index][3] = 3;
                _this.status_up[index][1][1] = status_up;
                motion = 'df';
                break;  
                case 'CH':
                d_image = 'image/attack_1.png';
                assist_str = "挑発";
                _this.counter[index][4] = 2;
                motion = 'ch';
                break;  
            }
            switch (motion) {
                case 'hp':
                    if(assist_user.HP + status_up > assist_user.MaxHP){
                        assist_user.HP = assist_user.MaxHP;
                    } else {
                        _this.$set(assist_user, 'HP', assist_user.HP + status_up);
                    }
                        log = assist_user.name + "のHPが" + status_up + "回復";
                        _this.damage_color = '#00ff55';
                    break;
                case 'mp':
                    if(assist_user.MP + status_up > assist_user.MaxMP){
                        assist_user.MP = assist_user.MaxMP;
                    } else {
                        _this.$set(assist_user, 'MP', assist_user.MP + status_up);
                    }
                        log = assist_user.name + "のMPが" + status_up + "回復";
                        _this.damage_color = '#00ff55';
                    break;                    
                case 'dp':
                    log = assist_user.name + "の防御力が" + status_up + "上昇";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'md':
                    log = assist_user.name + "の魔法御力が" + status_up + "上昇";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'bs':
                    log = assist_user.name + "の攻撃力が" + status_up + "上昇＆防御力ダウン";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'df':
                    log = assist_user.name + "の防御力が" + status_up + "上昇＆攻撃力ダウン";
                    _this.damage_color = '#ffaa00';
                    break;
                case 'ch':
                    log = assist_user.name + "にターゲットが集中！";
                    break;
    
            }
_this.log = "<br><span class='assist_log'>" + user.name + "の" + assist_str + ":" + log + "</span>" + _this.log;
//**********ステータス変動表示*************//
    _this.$set(assist_user, 'd_image', d_image);
    _this.$set(assist_user, 'damage', status_up);
 if(motion != 'ch'){     
    _this.$set(assist_user, 'counter', 1); 
 }
        setTimeout(function(){
            _this.$set(assist_user, 'counter', 0);
            _this.damage_color = '#ff2600';
        },400);
      
    _this.$set(assist_user, 'damage_img', 1);
        setTimeout(function(){
            _this.$set(assist_user, 'damage_img', 0);
        },1000);            
    }
    //**********ステータス変動反映*************//
    _this.reset_status();
    _this.$set(user, 'MP', user.MP - down_mp);    
    down_mp = mp;
    _this.action = "";
    user.bt_counter = 0;
}    
//************ユーザーの攻撃用*****************************************//        
},attackEventUser:function(user,action,mp){
        var _this = this;
        var log = "";
        var damege = 0;
        var damege_str = "";
        var d_image = "";
        var down_mp = 0;
        var down_hp = 0;
        _this.$set(user, 'motion', 'translateX(-70px)');
        setTimeout(function() {
            _this.$set(user, 'motion', 'translateX(0px)');
        },700);
        //*****特殊攻撃処理*********//
        if(action != "") {
            
        //*****魔法消費MP20************//
            if(user.MP < mp){
                _this.log = "<br><span class='err_log'>MPが足りません</span>" + _this.log;
                return false;
            } else {
                switch (action) {
                //黒魔法    
                    case 'S1':
                    damege = Math.round(user.mP * 1.08);
                    d_image = 'image/stone1.png';
                    damege_str = "ストーン";
                    break;
                    case 'S2':
                    damege = Math.round(user.mP * 1.46);
                    d_image = 'image/stone2.png';
                    damege_str = "ストーンⅡ";
                    break;
                    case 'S3':
                    damege = Math.round(user.mP * 1.88);
                    d_image = 'image/stone3.png';
                    damege_str = "ストーンⅢ";
                    break;
                    case 'W1':
                    damege = Math.round(user.mP * 1.16);
                    d_image = 'image/water1.png';
                    damege_str = "ウォータ";
                    break;
                    case 'W2':
                    damege = Math.round(user.mP * 1.56);
                    d_image = 'image/water1.png';
                    damege_str = "ウォータⅡ";
                    break;
                    case 'W3':
                    damege = Math.round(user.mP * 1.96);
                    d_image = 'image/water1.png';
                    damege_str = "ウォータⅢ";
                    break;
                    case 'F1':
                    damege = Math.round(user.mP * 1.24);
                    d_image = 'image/fire1.png';
                    damege_str = "ファイア";
                    break;
                    case 'F2':
                    damege = Math.round(user.mP * 1.64);
                    d_image = 'image/fire2.png';
                    damege_str = "ファイアⅡ";
                    break;
                    case 'F3':
                    damege = Math.round(user.mP * 2.02);
                    d_image = 'image/fire3.png';
                    damege_str = "ファイアⅢ";
                    break;
                    case 'B1':
                    damege = Math.round(user.mP * 1.32);
                    d_image = 'image/burizado1.png';
                    damege_str = "ブリザド";
                    break;                    
                    case 'B2':
                    damege = Math.round(user.mP * 1.72);
                    d_image = 'image/burizado2.png';
                    damege_str = "ブリザドⅡ";
                    break;                    
                    case 'B3':
                    damege = Math.round(user.mP * 2.08);
                    d_image = 'image/burizado3.png';
                    damege_str = "ブリザドⅢ";
                    break;                    
                    case 'R1':
                    damege = Math.round(user.mP * 1.40);
                    d_image = 'image/sander1.png';
                    damege_str = "サンダー";
                    break;  
                    case 'R2':
                    damege = Math.round(user.mP * 1.80);
                    d_image = 'image/sander2.png';
                    damege_str = "サンダーⅡ";
                    break;  
                    case 'R3':
                    damege = Math.round(user.mP * 2.16);
                    d_image = 'image/sander3.png';
                    damege_str = "サンダーⅢ";
                    break;
                //範囲黒魔法
                    case 'SG1':
                    damege = Math.round(user.mP * 1.08);
                    d_image = 'image/stone1.png';
                    damege_str = "ストンガ";
                    break;
                    case 'SG2':
                    damege = Math.round(user.mP * 1.46);
                    d_image = 'image/stone2.png';
                    damege_str = "ストンガⅡ";
                    break;
                    case 'SG3':
                    damege = Math.round(user.mP * 1.88);
                    d_image = 'image/stone3.png';
                    damege_str = "ストンガⅢ";
                    break;
                    case 'WG1':
                    damege = Math.round(user.mP * 1.16);
                    d_image = 'image/water1.png';
                    damege_str = "ウォタガ";
                    break;
                    case 'WG2':
                    damege = Math.round(user.mP * 1.56);
                    d_image = 'image/water1.png';
                    damege_str = "ウォタガⅡ";
                    break;
                    case 'WG3':
                    damege = Math.round(user.mP * 1.96);
                    d_image = 'image/water1.png';
                    damege_str = "ウォタガⅢ";
                    break;
                    case 'FG1':
                    damege = Math.round(user.mP * 1.24);
                    d_image = 'image/fire1.png';
                    damege_str = "ファイガ";
                    break;
                    case 'FG2':
                    damege = Math.round(user.mP * 1.64);
                    d_image = 'image/fire2.png';
                    damege_str = "ファイガⅡ";
                    break;
                    case 'FG3':
                    damege = Math.round(user.mP * 2.02);
                    d_image = 'image/fire3.png';
                    damege_str = "ファイガⅢ";
                    break;
                    case 'BG1':
                    damege = Math.round(user.mP * 1.32);
                    d_image = 'image/burizado1.png';
                    damege_str = "ブリザガ";
                    break;                    
                    case 'BG2':
                    damege = Math.round(user.mP * 1.72);
                    d_image = 'image/burizado2.png';
                    damege_str = "ブリザガⅡ";
                    break;                    
                    case 'BG3':
                    damege = Math.round(user.mP * 2.08);
                    d_image = 'image/burizado3.png';
                    damege_str = "ブリザガⅢ";
                    break;                    
                    case 'RG1':
                    damege = Math.round(user.mP * 1.40);
                    d_image = 'image/sander1.png';
                    damege_str = "サンダガ";
                    break;  
                    case 'RG2':
                    damege = Math.round(user.mP * 1.80);
                    d_image = 'image/sander2.png';
                    damege_str = "サンダガⅡ";
                    break;  
                    case 'RG3':
                    damege = Math.round(user.mP * 2.16);
                    d_image = 'image/sander3.png';
                    damege_str = "サンダガⅢ";
                    break;
                //攻撃用    
                    case 'A1':
                    damege = Math.round(user.aP * 1.22);
                    down_hp = Math.floor(user.HP / 10.11);
                    d_image = 'image/ankoku1.png';
                    damege_str = "暗黒";
                    break;                    
                    case 'A2':
                    damege = Math.round(user.aP * 1.88);
                    down_hp = Math.floor(user.HP / 5.11);
                    d_image = 'image/ankoku3.png';
                    damege_str = "暗黒2";
                    break;  
                    case 'A3':
                    damege = Math.round(user.aP * 2.88);
                    down_hp = Math.floor(user.HP / 3.11);
                    d_image = 'image/ankoku3.png';
                    damege_str = "暗黒3";
                    break;                      
                    case 'D':
                    damege = Math.round(user.aP * 1.22);
                    d_image = 'image/d_attack.png';
                    damege_str = "ダブルアタック";
                    break;
                    case 'S':
                    damege = Math.round(user.aP * 2.55);
                    d_image = 'image/attack_5.png';
                    damege_str = "デシメーション";
                    break;
                //防御依存
                    case 'B':
                    damege = Math.round(user.dP * 2.55);
                    d_image = 'image/attack_4.png';
                    damege_str = "ボーパルブレード";
                    break;
                //範囲攻撃
                    case 'SB1':
                    damege = Math.round(user.dP * 1.55);
                    d_image = 'image/atakku_3.png';
                    damege_str = "カラミティ";
                    break;
                //白魔法    
                    case 'H1':
                    damege = Math.round(user.mP * 1.22);
                    d_image = 'image/holly1.png';
                    damege_str = "ホーリー";
                    break;                    
                    case 'H2':
                    damege = Math.round(user.mP * 1.44);
                    d_image = 'image/holly2.png';
                    damege_str = "ホーリー2";
                    break;                    
                    case 'H3':
                    damege = Math.round(user.mP * 1.88);
                    d_image = 'image/holly3.png';
                    damege_str = "ホーリー3";
                    break;
                //白魔法範囲    
                    case 'HG1':
                    damege = Math.round(user.mP * 1.22);
                    d_image = 'image/holly1.png';
                    damege_str = "ホーリガ";
                    break;                    
                    case 'HG2':
                    damege = Math.round(user.mP * 1.44);
                    d_image = 'image/holly2.png';
                    damege_str = "ホーリガ2";
                    break;                    
                    case 'HG3':
                    damege = Math.round(user.mP * 1.88);
                    d_image = 'image/holly3.png';
                    damege_str = "ホーリガ3";
                    break;                    

                }
                down_mp = mp;
                _this.action = "";
            }
               
        } else {
        //*****通常攻撃処理*********//
        var ran = Math.floor(Math.random() * 4);
        switch (ran) {
            case 0:
                 damege = Math.round(user.aP * 1.11);
                 damege_str = "攻撃";
                break;
            case 1:
                 damege = Math.round(user.aP * 1.22);
                 damege_str = "攻撃";
                break;
            case 2:
                 damege = Math.round(user.aP * 1);
                 damege_str = "攻撃";
                break;
            case 3:
                 damege = Math.round(user.aP * 1.8);
                 damege_str = "クリティカル攻撃";
                break;
            case 4:
                 damege = Math.round(user.aP * 0.5);
                 damege_str = "ミス攻撃";
                break;
        }
        //通常ターンのみMPを回復//
        if(user.MP + 10 > user.MaxMP){
            user.MP = user.MaxMP;
        } else {
        user.MP = user.MP + 10;
        }
        d_image = 'image/motion1.png';
    }    
//**********ダメージ＆ログの生成*************//
//反射ダメージ用
if(down_hp > 0) {
    user.HP = user.HP - down_hp;
    user.damage = down_hp;
    _this.$set(_this.active_user, 'd_image', d_image);    
    //**********ダメージ表示*************//
    _this.$set(_this.active_user, 'counter', 1);
    _this.$set(_this.active_user, 'damage_img', 1);  
        setTimeout(function(){
        _this.$set(_this.active_user, 'counter', 0);
    },400);
    setTimeout(function(){
        _this.$set(_this.active_user, 'damage_img', 0);
    },1000);    
}
//反射ダメージ用 終了

//**********************範囲攻撃用*************************************//

if(action.length === 3){
    for(var i = 0;i < _this.battle_chara.length;i++){
        if(_this.battle_chara[i].HP > 0){
            if(_this.battle_chara[i].HP - damege > 0){
                _this.battle_chara[i].HP = _this.battle_chara[i].HP - damege;
            } else {
                _this.battle_chara[i].HP = 0;
            }
             _this.$set(_this.battle_chara[i],'d_image',d_image);
             _this.$set(_this.battle_chara[i],'damege',damege);
             _this.log = "<br><span class='user_log'>" + user.name + "の" + damege_str + _this.battle_chara[i].name + "に"  + damege + "のダメージ" + "</span>" + _this.log;
            if(_this.battle_chara[i].HP <= 0){
                    _this.log = "<br><span class='user_log'>" + _this.battle_chara[i].name +  "を倒した！" + "</span>" + _this.log;
                    _this.exp = _this.exp + 50;
                    var ran = Math.floor(Math.random() * 10);
                    if(ran == 9){
                    var ran = Math.floor(Math.random() * 12);
                //ドロップリストのアイテムをランダムでドロップ
                    _this.log = "<br><span class='get_log'>" + _this.battle_chara[i].name +  "は" + _this.drop_item[ran][0] + "を落とした！" + "</span>" + _this.log;
                    _this.get_item.push(_this.drop_item[ran]);
                }
            }
        }
    }    
        //**********ダメージ表示*************//
        _this.$set(_this.battle_chara[0], 'counter', 1);
        _this.$set(_this.battle_chara[0], 'damage_img', 1);  
            setTimeout(function(){
            _this.$set(_this.battle_chara[0], 'counter', 0);
            },400);
            setTimeout(function(){
            _this.$set(_this.battle_chara[0], 'damage_img', 0);
            if(_this.battle_chara[0].HP == 0){
            _this.$set(_this.battle_chara[0], 'hp_counter',0);
            }
            },1000);
        //**********ダメージ表示*************//
        _this.$set(_this.battle_chara[1], 'counter', 1);
        _this.$set(_this.battle_chara[1], 'damage_img', 1);  
            setTimeout(function(){
            _this.$set(_this.battle_chara[1], 'counter', 0);
            },400);
            setTimeout(function(){
            _this.$set(_this.battle_chara[1], 'damage_img', 0);
            if(_this.battle_chara[1].HP == 0){
            _this.$set(_this.battle_chara[1], 'hp_counter',0);
            }
            },1000);
        //**********ダメージ表示*************//
        _this.$set(_this.battle_chara[2], 'counter', 1);
        _this.$set(_this.battle_chara[2], 'damage_img', 1);  
            setTimeout(function(){
            _this.$set(_this.battle_chara[2], 'counter', 0);
            },400);
            setTimeout(function(){
            _this.$set(_this.battle_chara[2], 'damage_img', 0);
            if(_this.battle_chara[2].HP == 0){
            _this.$set(_this.battle_chara[2], 'hp_counter',0);
            }
            },1000);
        //**********ダメージ表示*************//
        _this.$set(_this.battle_chara[3], 'counter', 1);
        _this.$set(_this.battle_chara[3], 'damage_img', 1);  
            setTimeout(function(){
            _this.$set(_this.battle_chara[3], 'counter', 0);
            },400);
            setTimeout(function(){
            _this.$set(_this.battle_chara[3], 'damage_img', 0);
            if(_this.battle_chara[3].HP == 0){
            _this.$set(_this.battle_chara[3], 'hp_counter',0);
            }
            },1000);
} else {
  _this.target.damege = damege;
if(_this.target.HP - damege > 0){
_this.target.HP = _this.target.HP - damege;
} else {
    _this.target.HP = 0;
}
_this.$set(_this.target, 'd_image', d_image);
_this.log = "<br><span class='user_log'>" + user.name + "の" + damege_str + _this.target.name + "に" + + damege + "のダメージ</span>" + _this.log;
if(_this.target.HP <= 0){
//*************アイテム獲得処理*******************//    
    var ran = Math.floor(Math.random() * 8);
    if(ran == 0){
        var ran = Math.floor(Math.random() * 11);
    //ドロップリストのアイテムをランダムでドロップ 
        _this.log = "<br><span class='get_log'>" + _this.target.name +  "は" + _this.drop_item[ran][0] + "を落とした！" + "</span>" + _this.log;
        _this.get_item.push(_this.drop_item[ran]);
    }
    _this.log = "<br><span class='battle_chara_down'>" + _this.target.name +  "を倒した！" +"</span>" + _this.log;
    setTimeout(function() {
    _this.$set(_this.target, 'hp_counter',0);
    _this.exp = _this.exp + 50;
    },1000);
}
//**********ダメージ表示*************//
_this.$set(_this.target, 'counter', 1);
_this.$set(_this.target, 'damage_img', 1);  
    setTimeout(function(){
        _this.$set(_this.target, 'counter', 0);
    },400);
    setTimeout(function(){
        _this.$set(_this.target, 'damage_img', 0);
    },1000);  
}
user.MP = user.MP - down_mp;
_this.down_mp = 0;
user.bt_counter = 0;


  }    
},
});

var vm = new Vue({
    el:'#app',
}); 