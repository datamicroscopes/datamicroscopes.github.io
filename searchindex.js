Search.setIndex({envversion:46,filenames:["api","bb","datatypes","dd","docs","enron_blog","enron_email","gamma_poisson","gauss2d","hdp","index","intro","microscopes.common.dataview","microscopes.common.query","microscopes.common.random","microscopes.common.util","microscopes.common.validator","microscopes.irm","microscopes.kernels","microscopes.kernels.parallel","microscopes.mixture","mnist_predictions","ncluster","nic","niw","topic","understanding_your_results"],objects:{"microscopes.common":{query:[13,5,0,"-"],random:[14,5,0,"-"],util:[15,5,0,"-"],validator:[16,5,0,"-"]},"microscopes.common.query":{groups:[13,7,1,""],zmatrix:[13,7,1,""],zmatrix_heuristic_block_ordering:[13,7,1,""],zmatrix_reorder:[13,7,1,""]},"microscopes.common.random":{sample_inverse_wishart:[14,7,1,""],sample_multivariate_normal:[14,7,1,""],sample_normal_inverse_wishart:[14,7,1,""],sample_wishart:[14,7,1,""]},"microscopes.common.recarray":{dataview:[12,5,0,"-"]},"microscopes.common.recarray.dataview":{numpy_dataview:[12,8,1,""]},"microscopes.common.recarray.dataview.numpy_dataview":{digest:[12,6,1,""],next:[12,6,1,""],size:[12,6,1,""]},"microscopes.common.relation":{dataview:[12,5,0,"-"]},"microscopes.common.relation.dataview":{numpy_dataview:[12,8,1,""],sparse_2d_dataview:[12,8,1,""]},"microscopes.common.relation.dataview.numpy_dataview":{digest:[12,6,1,""],shape:[12,6,1,""],toarray:[12,6,1,""]},"microscopes.common.relation.dataview.sparse_2d_dataview":{digest:[12,6,1,""],shape:[12,6,1,""],tocoo:[12,6,1,""],tocsc:[12,6,1,""],tocsr:[12,6,1,""]},"microscopes.common.util":{KL_approx:[15,7,1,""],KL_discrete:[15,7,1,""],almost_eq:[15,7,1,""],mkdirp:[15,7,1,""],random_assignment_vector:[15,7,1,""],random_orthogonal_matrix:[15,7,1,""],random_orthonormal_matrix:[15,7,1,""],rank:[15,7,1,""]},"microscopes.common.validator":{validate_dict_like:[16,7,1,""],validate_in_range:[16,7,1,""],validate_kwargs:[16,7,1,""],validate_len:[16,7,1,""],validate_nonempty:[16,7,1,""],validate_nonnegative:[16,7,1,""],validate_not_none:[16,7,1,""],validate_positive:[16,7,1,""],validate_type:[16,7,1,""]},"microscopes.irm":{definition:[17,5,0,"-"],model:[17,5,0,"-"]},"microscopes.irm.definition":{model_definition:[17,8,1,""]},"microscopes.irm.definition.model_definition":{domain_hyperpriors:[17,6,1,""],domains:[17,6,1,""],relation_hyperpriors:[17,6,1,""],relation_models:[17,6,1,""],relations:[17,6,1,""],shape:[17,6,1,""]},"microscopes.irm.model":{bind:[17,7,1,""],deserialize:[17,7,1,""],initialize:[17,7,1,""],state:[17,8,1,""]},"microscopes.irm.model.state":{assignments:[17,6,1,""],empty_groups:[17,6,1,""],entity_data_positions:[17,6,1,""],get_domain_hp:[17,6,1,""],get_relation_hp:[17,6,1,""],get_suffstats:[17,6,1,""],groups:[17,6,1,""],groupsize:[17,6,1,""],isactivegroup:[17,6,1,""],models:[17,6,1,""],ndomains:[17,6,1,""],nentities:[17,6,1,""],ngroups:[17,6,1,""],nrelations:[17,6,1,""],score_assignment:[17,6,1,""],score_likelihood:[17,6,1,""],serialize:[17,6,1,""],set_domain_hp:[17,6,1,""],set_relation_hp:[17,6,1,""]},"microscopes.kernels":{gibbs:[18,5,0,"-"],mh:[18,5,0,"-"],parallel:[19,5,0,"-"],slice:[18,5,0,"-"]},"microscopes.kernels.gibbs":{assign:[18,7,1,""],assign_resample:[18,7,1,""],hp:[18,7,1,""],perftest:[18,7,1,""]},"microscopes.kernels.mh":{sample:[18,7,1,""]},"microscopes.kernels.parallel":{runner:[19,8,1,""]},"microscopes.kernels.parallel.runner":{get_latents:[19,6,1,""],run:[19,6,1,""]},"microscopes.kernels.slice":{hp:[18,7,1,""],sample:[18,7,1,""],theta:[18,7,1,""]},"microscopes.mixture":{definition:[20,5,0,"-"],model:[20,5,0,"-"],query:[20,5,0,"-"],runner:[20,5,0,"-"]},"microscopes.mixture.definition":{model_definition:[20,8,1,""]},"microscopes.mixture.definition.model_definition":{cluster_hyperprior:[20,6,1,""],hyperpriors:[20,6,1,""],models:[20,6,1,""],n:[20,6,1,""]},"microscopes.mixture.model":{bind:[20,7,1,""],deserialize:[20,7,1,""],initialize:[20,7,1,""],state:[20,8,1,""]},"microscopes.mixture.model.state":{add_value:[20,6,1,""],assignments:[20,6,1,""],create_group:[20,6,1,""],dcheck_consistency:[20,6,1,""],delete_group:[20,6,1,""],empty_groups:[20,6,1,""],get_cluster_hp:[20,6,1,""],get_feature_dtypes:[20,6,1,""],get_feature_hp:[20,6,1,""],get_feature_types:[20,6,1,""],get_suffstats:[20,6,1,""],groups:[20,6,1,""],groupsize:[20,6,1,""],is_group_empty:[20,6,1,""],nentities:[20,6,1,""],nfeatures:[20,6,1,""],ngroups:[20,6,1,""],remove_value:[20,6,1,""],sample_post_pred:[20,6,1,""],score_assignment:[20,6,1,""],score_data:[20,6,1,""],score_joint:[20,6,1,""],score_value:[20,6,1,""],serialize:[20,6,1,""],set_cluster_hp:[20,6,1,""],set_feature_hp:[20,6,1,""],set_suffstats:[20,6,1,""]},"microscopes.mixture.query":{posterior_predictive:[20,7,1,""],posterior_predictive_statistic:[20,7,1,""],zmatrix:[20,7,1,""]},"microscopes.mixture.runner":{default_assign_kernel_config:[20,7,1,""],default_cluster_hp_kernel_config:[20,7,1,""],default_feature_hp_kernel_config:[20,7,1,""],default_grid_feature_hp_kernel_config:[20,7,1,""],default_kernel_config:[20,7,1,""],runner:[20,8,1,""]},"microscopes.mixture.runner.runner":{expensive_state:[20,9,1,""],expensive_state_digest:[20,6,1,""],get_latent:[20,6,1,""],run:[20,6,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","method","Python method"],"2":["py","function","Python function"],"3":["py","class","Python class"],"4":["py","attribute","Python attribute"],"5":["np","module","Python module"],"6":["np","method","Python method"],"7":["np","function","Python function"],"8":["np","class","Python class"],"9":["np","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:method","2":"py:function","3":"py:class","4":"py:attribute","5":"np:module","6":"np:method","7":"np:function","8":"np:class","9":"np:attribute"},terms:{"0066cc":[5,6],"0x1029b9a10":3,"0x10aacbf10":6,"0x10af923d0":6,"0x10bc8bc50":6,"0x1127f1910":1,"0x1129d0090":23,"0x1129d0410":23,"0x112cf7290":8,"0x1134c8cd0":21,"0x114d9e6d0":3,"0x116f73510":8,"0x117426c50":23,"0x117475310":23,"0x117554e50":3,"0x1175a5110":23,"0x119273fd0":21,"0x11a8f48d0":7,"0x11bca0390":1,"0x11f764390":2,"0x120e4fad0":2,"0x1256f1890":21,"1029k":9,"129k":9,"163k":9,"1st":[9,25],"243k":9,"34495e":6,"47min":9,"535i":3,"53min":9,"5in":5,"66cc66":[5,6],"7th":[9,25],"__call__":22,"__init__":22,"_download":7,"_id":3,"_subplot":21,"break":22,"byte":[17,20],"case":[2,3,6,9,20,21,22,23,24,25],"class":[3,7,11,12,17,19,20,22,23],"default":[13,19,20],"final":[2,5,6],"float":[8,14,18,21],"function":[2,6,8,15,21,22],"import":[1,2,3,6,7,8,9,21,22,23,24],"int":[1,9,17,18,19,20,21],"long":[9,23,25],"new":[2,9,11,13,22,25],"p\u00f3lya":22,"return":[3,5,6,9,13,19,20,21,22],"true":[1,2,3,5,6,7,9,21,23],"var":[7,8],"while":[2,7,22],aarp:9,abandon:9,abb:9,abc:9,abdullah:9,abil:9,abl:[2,22],aboard:9,about:[2,3,11,22,23,24],abov:22,absent:21,abstract_dataview:20,abstrus:22,access:20,accord:[13,22],account:[9,25],accur:[7,22],accuraci:7,acheiv:23,across:19,act:[9,25],actual:11,acura:3,add:10,add_patch:[5,6],add_valu:20,addit:22,addition:[7,10],administr:[5,6,9,25],adult_mal:[3,23],advanc:[11,22],advantag:[3,22],affair:[5,6],after:[13,25],again:[3,8,11,22,23],against:[16,22],aggfunc:7,air:[9,25],airbag:3,aka:21,algorithm:[9,11,22],aliv:[3,23],all:[8,11,20,21],allnam:[1,2,6],alloc:25,allow:[2,3,5,6,7,8,10,22,24],almost_eq:15,alon:[3,23],alpha:[5,6,9,18,21,22,25],alpha_hist_:22,also:[2,5,6,9,21,22,23,24,25],amen:23,amend:[9,25],america:[5,6,9,25],american:[9,25],amp:3,anaconda:10,analysi:26,analyz:5,anchor:[9,25],ani:22,annot:7,annual:23,anoth:3,anxieti:[9,25],appear:20,append:[8,9,21,22],appli:19,appropri:7,approxim:22,arbitrari:[9,22,25],archiv:9,arg:16,argument:22,around:[8,12,19],arrai:[8,12,21],arratia:22,articl:[9,25],articul:22,as_cmap:6,ascend:7,asisst:[5,6],aspect:[5,6],assert:[1,21],assign:[5,6,8,9,11,13,17,18,20,21,22,25],assign_resampl:[18,20],assum:[2,3,7,11,19,21,22,23,24],assumpt:[2,7,11,22,24],astyp:1,attempt:7,audi:3,audienc:[9,25],authent:19,auto:[5,6],automat:10,auxiliari:[9,25],avail:[3,5,11],avec:13,averag:9,avg:[20,21],axesimag:[6,21],axessubplot:21,axi:[21,22],back:[22,24],backend:19,bag:[9,20],baghdad:[9,25],ballot:[9,25],bar:[3,9],barh:9,barri:[5,6],base:[3,5,6,7,9,22,25,26],base_measur:22,basic:1,bayesian:1,becaus:[11,20,22],becom:22,been:[6,9,25],befor:[8,9,25],beforehand:19,behind:[5,6,7],below:[6,7,22],bernoulli:[1,3,5,6],beta_bernoulli:[1,5,6,21],betabernouli:21,between:[2,5,6,20,22,23],billion:[9,25],bin:22,bind:[17,20],birthrat:7,black:[9,22,25],blade:[9,25],blair:[5,6],bless:[9,25],bloc:[9,25],block:[8,13],blog:[9,25],blogger:[9,25],blogospher:[9,25],blue:22,blue_cmap:[5,6],bmw:3,boat:[9,25],book:[9,25],bool:[1,2,6,13,21],border:21,born:7,boston:[9,25],bot:21,both:[2,5,6,7,13,23],boundari:[5,6],budget:[9,25],bui:[5,6],build:8,burn:[8,11],bush:[9,25],busi:[5,6],bytestr:[17,20],cach:[19,22],caf:7,caffein:7,call:[1,3,7,9,11,13,22,23,25],campaign:[9,25],campbel:23,can:[1,2,3,5,6,7,9,11,21,22,23,25],canada:23,canadian:23,capac:3,car:3,cardin:[5,6],carefulli:22,cargo:[9,25],cars93:3,carson:[9,25],cat_column:3,categor:2,categori:[7,22],cbar:[1,2,5,6,21],ceb:7,ceb_int:7,cell:[9,25],ceo:[5,6],chain:[1,2,5,6,8,11,21],channel:[9,10,25],character:11,characterist:[7,22],check:[8,20],chenei:[9,25],cherbourg:[3,23],chi:[4,10],chief:[5,6],child:3,children:7,chines:[20,22],chisquar:7,choic:22,choos:22,chosen:22,christ:[9,25],circl:3,citi:3,clark:[9,25],classabl:20,classif:[2,21],classifi:[11,21,22],clip:[9,21,25],close:22,cluster:[4,5],cluster_hp:[5,6],cluster_hyperprior:20,cluster_nam:[5,6],cluster_with_nam:[5,6],cmap:[5,6,21],cname:[5,6],cnt:21,code:11,coffe:7,col:3,col_2_id:3,collasp:20,color:[5,6],column:[3,7,8,11,13,23],combin:20,come:[2,22],commiss:[9,25],committe:[9,25],common:[0,2,6,8,9,10],commonli:[9,24,25],commun:[1,2,5,6,9,25],communications_rel:[1,2,5,6],compact:3,compar:[8,11,22,25],compon:20,comput:20,conda:[5,9,10,25],condit:[2,11,22,24],condpdf:18,condsamp:18,config:10,configur:20,conjug:[1,3,7,11,23,24],conserv:[9,25],consid:[1,2,3,7,11,22,23,24],consist:20,construct:[17,20,22],constructor:[19,22],contact:[9,25],contain:[1,5,17,19,20,22,23,24],context:[1,2,11],continu:[5,6,22],conveni:[20,22],convent:[9,25],convert:[1,3,21],coo_matrix:12,copi:[5,6,20],core:19,corman:[5,6],corpora:2,corpu:[2,4,5],corr:23,correl:23,correspond:22,could:[2,5,6,22,23,24],count:[3,4],countabl:22,countri:[9,25],cours:[9,22,25],court:[9,25],cov:[8,14],covari:24,coverag:[9,25],cparam:18,cpickl:[1,2,9],cpu:9,cpu_count:[5,6],creat:[5,6,8,9,19,20,25],create_group:20,crosstab:7,crp:20,csv:[2,3,7,23],ctitl:[5,6],culster:22,cumsum:[5,6],cup:7,curl:9,current:[9,19,20],cut:[9,25],cylind:3,dai:2,daili:4,daniel:22,danni:[5,6],darkgrid:[2,3,8,9,23,24],darrel:[5,6],dasovich:[5,6],dat:7,data0:21,data1:21,data_for_group:21,databas:9,datafram:[8,9,11],datamicroscop:2,datapoint:8,dataset:[1,2,3,4,5,6,7,9,10],datatset:3,dataview:[0,6,8],datayp:2,date:[22,24],datset:[10,23],david:[5,6],dcheck_consist:20,dean:[9,25],decid:8,deck:[3,23],def:[1,2,3,5,6,8,9,11,21,22],default_assign_kernel_config:[5,6,20],default_cluster_hp_kernel_config:20,default_feature_hp_kernel_config:20,default_grid_feature_hp_kernel_config:20,default_kernel_config:[20,21],defin:[1,3,5,6,8,9,21,22,24,25],definit:[0,1,3,6,8,9],defn:[5,6,8,9,17,20,21,25],defn_irm:1,defn_mixtur:1,del:3,delai:[9,25],delainei:[5,6],delete_group:20,delta:22,democrat:[9,25],demograph:23,demonstr:[9,25],densiti:[23,24],depart:3,departur:3,depend:[7,19],derriv:24,desc:[5,6],descend:13,descirb:22,describ:[2,6,7,20,23],descript:3,descriptor:20,deseri:[17,20],design:[9,25],desir:1,detail:2,determin:22,develop:22,diag_kind:[2,24],diagon:13,dict:[5,6,17,18,20],differ:[2,8],digest:12,digit:[1,4,10],digits_per_row:21,dimens:21,dimension:[11,20,21,22],dirac:22,director:[5,6],directori:19,dirichlet:2,dirichlet_discret:3,dirichlet_norm:22,dirichletprocesssampl:22,discov:[4,10],discret:2,discuss:[9,25],dish_assign:9,dish_hp:[9,25],disjoint:22,disk:21,displai:9,distirbut:[23,24],district:[9,25],distriut:3,ditka:[9,25],ditribut:7,dkosopedia:[9,25],dlc:[9,25],dload:9,dnc:[9,25],doc17:9,doc7:9,doc:[9,25],doc_text:9,docid:9,document:[2,9,25],docword:9,doe:[17,20],domain:[5,6,17],domain_hyperprior:17,don:22,donoho:[5,6],down:2,download:6,dpmm:10,draw:22,drawn:22,drew:[5,6],drive:3,driver:3,drivetrain:3,drivetrain_id:3,drop:3,drop_dupl:[3,7],dropna:23,dtype:[1,2,3,6,8,21],dump:[9,21],dur:7,durat:7,each:[2,3,5,6,7,8,9,11,19,20,21,22,23,24,25],easier:22,easili:7,edit:[9,25],editori:2,edu:[7,9],educ:7,edward:[9,25],eid:[17,20],eisenstein:2,either:[8,20],elect:[9,25],elector:[9,25],element:20,elif:21,els:[1,2,6,21,22],email:[1,2,5,6,9,25],email_matrix_color:5,embark:[3,23],embark_town:[3,23],emiss:[9,25],empir:22,employe:[5,6],empty_group:[17,20],encod:[7,22],endang:[9,25],eneri:[5,6],engines:3,enough:22,enron:[1,2,4,5],enron_crawl:6,enron_util:[1,2,5,6],entiti:[8,20],entity_based_state_object:18,entity_data_posit:17,entri:20,enumer:[1,2,5,6,8,9],environ:[6,7,8,21,24],environment:[9,25],equal:[7,22],equival:22,errupiton:2,errupt:2,erupt:2,especi:6,estim:[11,23,24],ethic:[9,25],even:22,event:[7,9,25],ever:7,everi:9,evolv:[8,11],examin:[8,11,23],exampl:[1,2,3],excerpt:[9,25],execut:[5,6],exemplari:[9,25],exhbit:22,exhibit:[2,22,24],exist:[11,20],expand:21,expect:22,expens:19,expensive_st:20,expensive_state_digest:20,explicitli:[17,20],explor:[9,25,26],extend:3,extens:25,extract:[9,25],fact:3,factor:22,faith:2,fall:[2,23],fals:[1,2,3,5,6,7,8,9,11,13,21,23],famili:[9,25],faq:[9,25],fare:[3,23],featur:[12,20],fed:9,femal:[3,23],fertil:7,fetch_mldata:[1,21],few:[8,11,22],ff6600:[5,6],fid:20,fig:[2,24],figsiz:[2,7,22],figur:[7,22],fiji:7,file:9,fill:21,film:[2,9,25],filmmak:2,financi:[5,6],find:[2,4,5,6,9,10],finish:26,finit:[11,22],first:[3,8,9,10,11,13,19,21,22,23],first_runn:[8,11],fit:[7,9,25],fit_reg:[8,11],fix:7,flag:[9,25],flatten:21,flexibl:[7,10],float32:8,florida:[9,25],flower:[22,24],focu:21,follow:[1,7,9,20,24],follw:[22,24],fontsiz:[2,24],forc:[9,25],form:[1,2,24],format:[5,6,8,9,21],former:20,fortun:22,fossum:[5,6],found:23,four:8,freeper:[9,25],frequenc:20,from:[1,3,5,6,7,8,9,11,17,20,21,22,23,24,25],from_iter:[1,2,5,6],fromarrai:21,front:3,fuel:3,fulli:9,fullnam:[5,6],fun:[9,25],func:18,gai:[9,25],gamma:4,gamma_poisson:7,gaussian:[2,4],gca:[5,6],geaccon:[5,6],gener:[8,9,11,13,20,22,25],gephardt:[9,25],get:[5,6,9,21,22,25],get_cluster_hp:20,get_domain_hp:17,get_feature_dtyp:20,get_feature_hp:[20,21],get_feature_typ:20,get_full_nam:[5,6],get_lat:[5,6,8,11,19,20,21],get_relation_hp:17,get_suffstat:[17,20,21],get_titl:[5,6],gibb:0,gid:[17,20,21],github:[2,3,23],give:2,given:[1,2,3,5,6,9,13,20,22,23],gmm:8,goal:11,good:22,googlebomb:[9,25],gop:[9,25],govern:[5,6],governor:[9,25],grab:9,graph:1,grayscal:21,greater:22,greg:[5,6],gregor:22,grid:20,grid_feature_hp:20,group:[5,6,11,13,17,20,21],groupbi:[3,9],groupsbys:21,groupsiz:[17,20,21],grow:22,grp:9,guard:[9,25],guest:[9,25],gui:[9,25],gunzip:9,had:2,half:21,handwritten:1,harri:[5,6],have:[2,5,6,8,22,23,24],hayslett:[5,6],hdp:[9,10,25],head:[2,3,7,8,9,21,23,24],header:9,health:[9,25],heard:[9,25],heatmap:[1,2,5,6,7,8,21],heaven:[9,25],heierarch:2,height:[5,6,22],heinrich:22,help:[9,25],helper:13,here:[5,6,8,9,25],heterogen:12,heurist:13,hidden:2,hierarch:4,hierarchich:10,high:7,highli:19,highlight:[5,6],highwai:3,hist:[2,22],histogram:22,hold:[21,22],hopper:22,horsepow:3,horton:[5,6],hour:[9,25],hous:[9,25],how:[3,9,20,22,25],howev:[2,22,24],hparam:18,hstack:21,html:7,http:[2,3,7,9,23],hue:[2,8,11,24],hyatt:[5,6],hyper:20,hyperior:20,hyperparamet:[9,25],hyperprior:20,id_to_word:9,idea:22,ident:[5,6],identifi:[5,6,9,25],idx:[1,2,5,6,16],ill:[9,25],illustr:2,imag:[1,6,21],imageop:21,imagin:22,implement:[8,9,19,20,25],imshow:[5,6,21],includ:6,increasingli:22,independ:[7,20,21,23],index:[0,2,3,7,9],index_col:[2,3,7,23],indici:6,individu:[2,5,6,25],indiviud:[2,5,22,24],infer:[4,5,6],infinit:4,inform:[2,9,22,23,25],inifinit:[2,5,6],initi:[5,6,8,9,17,20,21,25],inlin:[1,2,3,6,7,8,9,21,23,24],inplac:[3,9],input:12,instal:[5,9],instanc:22,instead:[17,20,22],intak:7,integ:[3,7],integr:22,integra:3,interact:[9,25],interfac:[13,20],internet:[9,25],interpol:[5,6,21],interpret:[2,7,9,25],interv:7,intial:[9,25],introduct:10,invers:[4,7,10,11],inves:24,invoc:18,iowa:[9,25],iraq:[9,25],iraqi:[9,25],iri:[2,22,24],irisplot:[2,24],irm:[0,1,2,3,5,6,10,12],irm_definit:[1,3],is_group_empti:20,isactivegroup:17,ishiguro:6,isnt:[9,25],isotrop:8,iter:[8,9,11,20,21],itertool:[1,2,6,9],itself:22,jan:2,jeff:[5,6],jefferi:[5,6],job:[9,25],john:[5,6,9,25],join:9,joint:24,journalist:[9,25],jul:[9,25],just:3,kde:[2,24],kdeplot:23,kei:[16,21],kernel:[0,6],kernel_config:[8,20],kerri:[9,25],kevin:[5,6],kimberli:[5,6],kind:[2,3,5,9,11,25],kingdom:[9,25],kitchen:[5,6],kl_approx:15,kl_discret:15,know:22,known:11,kos_stat:[9,25],kos_vocab:9,kwarg:[16,17,19,20],label:[1,2,3,5,6],lam:14,lambda:[9,21,22],larg:[19,22],larger:22,largest:[13,21],latent:[2,5,6,8,11,20,21,23,25],later:22,latest:21,lavorato:[5,6],law:[9,25],layer:19,lda:[2,9,10,25],ldavi:[9,25],learn:[1,2,3,4,5,6,7,8],left:[3,9,25],legend:[3,8,11,23],len:[1,2,5,6,9,13,20,21,22,25],length:3,less:22,let:[1,2,3,5,6,7,8,9,11,21,22,23,24,25,26],level:7,leverag:2,libari:[9,25],liber:[9,25],librari:10,lie:22,lieberman:[9,25],life:[9,25],light_palett:6,like:[2,22,23],likelihood:1,limit:19,lindi:[5,6],line:[9,22,25],linewidth:[1,2,6,8,21],list:[1,2,3,5,6,7,8,9,11,13,17,19,20,21,23],literatur:22,live:[9,25],lmplot:[8,11],load:[1,2,6,9,21],load_dataset:[2,3,23,24],local:[9,25],locat:[9,22,25],log:23,log_exponenti:18,log_noninformative_beta_prior:18,logfar:23,login:[9,25],logspac:23,lokai:[5,6],lokei:[5,6],look:[2,3,5,6,8,21,22,23],lot:[9,25],louis:[5,6],love:[9,25],lower:7,lst:16,luggag:3,lynn:[5,6],lynx:23,machin:[9,19,22,24,25],made:[6,20],mai:7,mail:[4,5],make:[2,3,6,9,21,22,24,25],male:[3,23],man:[3,23],manag:[5,6],mani:[20,22],manufactur:3,manufacturer_id:3,map:[5,6,7,9],markov:2,marriag:[7,9,25],mask:[12,20,21],masked_arrai:21,mass:3,match:2,math:[1,21],mathemat:22,matplotlib:[1,2,3,6,7,8,9,21,23,24],matric:[1,13],matrix:[1,2,5,6,8,12,13,20,23],matter:[9,25],max:[3,7,21],mccain:[9,25],mccarti:[5,6],mcconnel:[5,6],mckenzi:23,mcmc:[5,6,21],mean:[7,8,9,20,21,23,24,25],meant:[17,20],measur:[2,7,22,24],media:[9,25],member:[5,6],memoiz:22,merg:[3,20,21],merit:[9,25],messag:[9,25],mesur:2,method:[2,11,20,22],michael:[9,25],michel:[5,6],microscop:[0,1,2,3,5,6,7,8,9,10],midsiz:3,might:23,mile:3,militari:[9,25],min:[3,7],minut:21,mituremodel:2,mixtur:[0,1,2,3,4],mixturemodel:[0,10,12],mkdirp:15,mm_definit:[1,3],mnist:[1,4,10],mnist_dataset:[1,21],mode:[20,23],model:[0,1],model_definit:[1,3,5,6,8,9,17,20,21,25],model_descriptor:20,model_nam:[1,3],modif:20,modifi:20,modul:0,moment:[9,25],monei:[9,25],monument:2,more:[2,3,7,11,22],most:[1,2,9,11,13,19,22,24,25],mostli:[9,25],movi:[9,25],mpg:3,mu0:14,much:22,multimod:23,multinomi:3,multipl:[3,8],multiprocess:[6,8,19],multivari:[2,11,22,23,24],multivariate_norm:8,multyvac:[8,19],mung:[8,21],murphi:24,must:[9,19,21,22,25],mxitur:11,n_cluster:[8,11],n_sampl:22,name:[1,2,3,5,6,7,20],namemap:[1,2,5,6],nan:[3,23],nchain:[5,6,8,21],ndarrai:[12,13,14,20],ndn:[9,25],ndomain:17,ndp:[9,25],nearest:[5,6,21],necessari:[6,8],need:[3,6,9,22,25],nentiti:[17,20],network:[1,2,4],new_stat:9,new_valu:22,newaxi:21,neww:21,next:[5,6,12,22],nfeatur:20,ngroup:[17,20],nich:23,night:[9,25],niter:[5,6,8,11,19,20,21],niw:[8,24],nnz:9,non:[3,8],none:[3,5,6,7,16,18,22],norm:22,normal:[2,4,7,10,11,22],normal_inverse_chisquar:23,normal_inverse_wishart:[8,24],north:[5,6],northwest:23,note:[3,7,13,17,19,20,21,22,24],notebook:22,novemb:[9,25],now:[5,6,7,8,11,21,23,26],npd:12,nrelat:17,nsamples_per_clust:8,ntopic:9,num:9,numb:7,number:[1,2,3,4,5,6,7,8,9,10,11,19,20,21],numpi:[1,2,3,6,7,8,12,21,22,23,24],numprob:7,numpy_dataview:[5,6,8,12,21],nuniqu:[8,11],nyt:2,nyt_50:2,obj:16,object:[3,8,9,17,19,20],observ:[2,11,20,21,22],occur:7,offic:[5,6],often:[1,2,20,22,23,24],old:2,old_faith:2,omit:20,onli:[1,3,5,6,19,20,21,24],onlin:[5,6,9,25],open:[1,2,6,9,21],oppos:20,optim:[23,24],option:[19,20],order:[5,6,7,8,13],ordin:4,organ:[8,9,25],origin:[1,3,21],orlean:[9,25],other:[2,22],our:[1,2,3,5,6,7,8,9,10,11,21,22,23,24,25],out:[5,6],output:21,over:[7,22,24,25],overview:[4,10],own:[17,20,25],owner:[9,25],packag:[9,25],page:0,pairplot:[2,24],palett:[2,24],panda:[1,2,3,7,8,9,22,23,24],parallel:[0,5,6,8],param:18,param_nam:16,paramet:[7,8,11,12,13,17,19,20,21,22,24,26],parameter:[7,22],parametr:8,paramteter:22,parch:[3,23],parse_bag_of_words_fil:9,parti:[9,25],particular:[2,20,22],partit:22,pass:[19,21],passeng:[3,23],passion:[9,25],password:[9,25],patch:[5,6],path:15,payload:[5,6],pclass:[3,23],pdf:[18,22],peek:[8,11],peopl:[5,6,9,25],per:[3,20],percent:[9,25],perf:7,perform:[7,23],perftest:18,permut:[8,13,21],perplex:9,person:[1,2,5,6],petal_length:[2,24],petal_width:[2,24],physic:2,pick:[9,25],pickl:[1,2,6,9,21],piec:[9,25],pil:21,pipelin:[5,6],pixel:21,pkl:9,pleas:[10,22],plot:[2,3,5,6,8,9,21,22,23,24,25],plot_assign:[8,11],plot_clust:21,plt:[1,2,3,5,6,7,8,9,11,21,22,23,24],png:[5,22],point:[8,17,20,22],poisson:4,polit:[9,25],poll:[9,25],pool:19,popular:2,posit:22,possibl:[5,6,20],posterior:[1,20,24],posterior_predict:20,posterior_predictive_statist:[20,21],power:19,practic:[22,24],pred:9,predeb:[9,25],predic:9,predict:[9,21,25,26],prepar:9,preprocess:6,present:21,presid:[5,6,9,25],price:[3,23],primari:[9,25],primarili:20,princeton:7,print:[2,3,5,6,9,12,21,25],prior:[1,11,20,22,24],prior_prob:21,prng:[5,6,8,9,11,21,25],prob:21,probabilist:[11,22],probabl:[1,2,3,9,11,21,22,23],problem:[2,7],process:[2,4],produc:[7,26],properti:22,proport:22,provid:[2,10,26],psi:14,psych252:7,purpos:20,put:[9,25],pylab:[2,6,8,21],pyldavi:[9,25],pyldavis_data:9,pyplot:[1,3,7,9,23,24],python:9,quadrant:8,queenstown:3,queri:[0,5,6,8],queries_mask:21,question:7,quiz:7,race:[9,25],radio:[9,25],rais:[5,6],random:[0,3,8,9],random_assignment_vector:15,random_orthogonal_matrix:15,random_orthonormal_matrix:15,randomli:[8,9],rang:[2,5,6,9,22,24],rank:15,rate:7,raw:[7,9,20,25],rdataset:[2,3,23],read:[2,7,9,10,25],read_csv:[2,3,7,23],reader:[9,25],readi:9,readlin:9,reagan:[9,25],real:[2,4,9,10,11,20,22,23],realiti:[9,25],rear:3,reason:22,recal:[1,7,21,22],recarrai:[0,8],receiv:[1,2,6,9],receiver_id:[1,2,6],recogn:22,recognit:[4,10],recommend:19,record:12,rect:[5,6],rectangl:[5,6],recurs:22,reformat:21,regard:19,regulatori:[5,6],relat:[0,2,4],relation_hyperprior:17,relation_model:17,relationship:2,releat:6,relev:[9,25],reli:[10,11,22],rem:21,remain:22,rememb:7,remove_valu:20,reorder:13,rep:12,repo:6,repositori:[9,25],repres:[1,2,5,6,7,12,22],represent:[2,17,20],republican:[9,25],requir:22,research:[9,25],reset_index:3,reshap:[1,21],resid:7,resiz:21,respons:[7,9,25],rest:[2,8],restaur:[20,22],restor:[17,20],result:[1,2,6,8,9,11,13,21,22,25],resultng:20,rev:3,revers:21,rich:22,richard:[5,6],richer:22,rick:[5,6],right:[9,25],risk:[5,6],river:23,rng:[5,6,8,9,14,17,18,19,20,21,25],rod:[5,6],roi:22,roll_di:22,room:3,root:19,rotat:3,row:[3,13,21],rpm:3,run:[5,6,8,9,11,19,20,21,25],runner:[0,5,6,8,9,11,19],russian:2,saddam:[9,25],said:2,same:[20,21,22],sampl:[18,20,22],sample_inverse_wishart:14,sample_multivariate_norm:14,sample_normal_inverse_wishart:14,sample_post_pr:20,sample_wishart:14,sampler:[5,6,20,21],samples_per_chain:[20,21],satisfi:22,save:[9,21],savefig:[5,22],scalar:[20,24],scalar_funct:18,scale:[8,14,21,22,23],scalebys:21,scatter:[2,24],schaller:[9,25],scheme:22,school:[9,25],schoolcraft:[5,6],scienc:[9,25],scientist:[9,25],scipi:[2,12],scirpt:6,score:7,score_assign:[17,20],score_data:20,score_joint:20,score_likelihood:17,score_valu:20,script:6,seaborn:[1,2,3,6,7,8,9,21,23,24],search:0,seat:[3,9,25],sec:7,second:[3,5,6],see:[3,11,22,23,24],seen:[20,25],select:11,self:[12,17,20,22],semin:2,senat:[9,25],sender:[1,2,6],sender_id:[1,2,6],sens:[9,25],sent:[1,5,6],sep:7,sepal_length:[2,24],sepal_width:[2,24],separ:23,sequenti:8,sergei:2,seri:[2,9,22],serial:[17,20],serializ:9,servic:[5,6,9,25],set2:[2,8,24],set:[1,2,6,7,8,9,10,20,21,22,24,25],set_cluster_hp:20,set_context:[1,2,3,6,7,8,9,23,24],set_domain_hp:17,set_feature_hp:20,set_index:23,set_palett:8,set_relation_hp:17,set_styl:[2,3,8,9,23,24],set_suffstat:20,set_titl:9,setosa:[2,22,24],setup:[6,19],sever:22,sex:[3,23],shape:[1,8,12,17,20,21],shapiro:[5,6],shellei:[5,6],shirlei:9,should:[13,17,20,22,24],show:[2,21,22,24],shown:7,shuffl:9,sibsp:[3,23],side:[9,25],sievert:[9,25],similar:22,similarli:[9,25],simpl:8,simplejson:9,simplest:23,simplic:21,simul:[8,11],sinc:[5,6,7,8,11,21,23,24],singl:[19,20,22],size:[2,5,6,8,9,12,13,16,21,24,25],skill:[5,6],sklearn:[1,21],slice:0,slice_cluster_hp:20,slice_feature_hp:20,small:[3,7,20,22],smallest:[9,25],social:2,soldier:[9,25],some:[1,3,7,9,23],sometim:[3,7],somewhat:22,sort:[1,2,3,5,6,8,9,13,21],sort_index:7,southampton:[3,23],space:[8,9,17,20,25],spars:[12,20],sparse_2d_dataview:12,speci:[2,9,22,24,25],specif:[1,2,3,11,13],specifi:[6,20,21,22,24],speech:[9,25],speed:9,spent:9,split:[2,9],sqrt:[1,21],squar:[4,10],standard:[22,24],stanford:7,stanlei:[5,6],start:[5,6,8,11,21],state:[2,3,8,9,11,17,19,20,23],staticmethod:22,statist:[20,21],std:7,steal:2,step:[6,8,9,11],step_siz:9,stick:22,stick_piec:22,still:22,stochast:22,store:[6,22],str:20,strategi:[19,20],string:[19,20],stringio:7,strip:9,structur:[2,4,10],stuff:[9,25],style:2,sub:[13,17,20],subplot:2,subplots_adjust:[2,24],subset:22,success:22,suffstat:21,sugest:2,suggest:[6,23],suitabl:20,sum:[7,22],sunzoo:[9,25],superior:23,suppli:19,support:[8,12,19,20,22],suppos:22,suptitl:[2,24],sure:8,survei:7,surviv:[3,23],suspici:[5,6],suva:7,swift:[9,25],table_assign:9,tail:[9,21,23],take:[1,2,3,9,20,22],talk:[1,2,3,6,7,8,9,23,24,25],tank:3,target:21,task:[2,21],tax:[9,25],teb:[5,6],ten:[9,25],tensor:12,term:[9,22,25],term_relevance_by_top:9,termin:10,territori:23,text:[1,2,3,6,7,8,9,21,23,25],than:[2,3,22],thei:[2,5,22,23],them:[3,7],themselv:2,theori:22,theta:18,theyr:[9,25],thi:[1,2,3,5,6,7,8,9,11,17,20,21,22,23,24,25],third:[3,23],those:[2,9,25],though:22,thought:[9,25],thread:[19,20],three:[21,22,23],thu:22,tim:22,time:[2,5,6,8,9,21,22,23,25],timeseri:[2,23],titan:[3,23],titl:[1,2,3,5,6,7,8,9,11,21,22,23],tnr:[9,25],toarrai:12,tocoo:12,tocsc:12,tocsr:12,togeth:[5,6],tol:15,tom:[9,25],tonight:[9,25],took:[5,6,21],tool:[2,9,25,26],top:[2,9,21,24],topic:[2,4],topic_distribution_by_docu:9,total:9,total_stick_us:22,town:3,tparam:18,traci:[5,6],trade:[9,25],traffic:[9,25],train:3,tran:3,trap:23,treasur:[5,6],tripl:9,troop:[9,25],tsplot:2,tuesdai:2,tupl:[6,20,21],turn:[3,13],two:[2,3,5,6,21,23,25],txt:[2,9],tycholiz:[5,6],typ:16,type:[1,2,3,6,10,12,19,20],typic:[2,7,9,22,24,25],uci:[9,25],uncertainti:[5,6],under:2,underli:[1,2,3,5,6,11,17,20,22,24],understand:[2,8],unhelp:22,uniform:22,uniqu:13,univari:[4,10],unknown:[9,23,25],unusu:[9,25],upload:9,upon:2,upper:7,urban:7,urllib2:7,urlopen:7,urn:22,usa:3,user:[6,9,10,25],util:[0,6],valid:0,valid_kwarg:16,validate_dict_lik:16,validate_in_rang:16,validate_kwarg:16,validate_len:16,validate_nonempti:16,validate_nonneg:16,validate_not_non:16,validate_posit:16,validate_typ:16,valu:[2,4,5,6,7,10,11,20,22,23],valueerror:[5,6],varaibl:2,vari:[8,22],variabl:[2,3,5,6,7,21,23,24],varianc:[7,22,23,24],variou:[1,10,19,26],vector:[12,13,20,21],veri:22,versicolor:[22,24],via:20,vice:[5,6],view:[5,6,8,12,20,21],vincentarelbundock:[2,3,23],vip:[5,6],virginica:[22,24],visual:[2,5,6,8,9,11,25,26],visualz:25,vocab:9,vocab_hp:[9,25],vocab_s:[9,25],vocabulari:[9,25],volum:19,voter:[9,25],vstack:[8,21],wai:[2,22],wait:2,walker:23,wall:9,want:[1,2,3,7,8,22,23,24],war:[9,25],watch:[8,11],watson:[5,6],web:[9,25],weber:[9,25],weight:[3,21,22],well:6,were:[2,22,23],weve:[9,25],whallei:[5,6],what:23,wheelbas:3,when:[9,21,22,24,25],where:[2,8,20,21,22],whether:13,which:[1,2,3,6,7,8,10,13,19,20,21,22,23,24],white:[9,25],whitelist:16,who:[3,5,6,23],whose:22,wide:22,width:[3,5,6],william:[5,6,9,25],wishart:[4,7,10,11,23],within:[2,5,6,9,25],without:22,woman:[3,23],women:7,wont:[9,25],word:[2,9,22,25],word_cnt:9,word_distribution_by_top:9,word_id:9,wordid:9,work:[19,20],world:7,would:[1,2,22,23,24],wrap:8,wrapper:8,write:[9,22,25],wws509:7,xferd:9,xlabel:[1,2,3,5,6,7,8,9,23],xrang:[1,2,5,6,8,9,11,21],xtick:[3,7,9],xticklabel:[1,2,5,6,8,21],y_2:21,y_3:21,y_cluster:8,y_new:20,y_rec:8,year:[2,7,9,23,25],yield:[1,2,6],ylabel:[1,2,3,5,6,7,8,9,23],york:2,you:[2,7,13,17,19,20,26],youll:[9,25],your:[3,4,7,8,9,10],ytick:7,yticklabel:[1,2,5,6,8,21],zahn:[9,25],zero:[1,2,6,21,23],zimbabw:[9,25],zip:[5,6,8,21],zmat:[5,6,8,13,20],zmatrix:[5,6,8,13,20],zmatrix_heuristic_block_ord:[5,6,8,13],zmatrix_reord:[5,6,8,13]},titles:["API Reference","Binary Data with the Beta Bernouli Distribution","Datatypes and Bayesian Nonparametric Models","Categorical Data and the Dirichlet Discrete Distribution","Tutorials","Network Modeling with the Infinite Relational Model","Clustering the Enron e-mail corpus using the Infinite Relational Model","Count Data and Ordinal Data with the Gamma-Poisson Distribution","Inferring Gaussians with the Dirichlet Process Mixture Model","Learning Topics in The Daily Kos with the Hierarchical Dirichlet Process","datamicroscopes: Bayesian nonparametric models in Python","Discovering structure in your data: an overview of clustering","dataviews","query","microscopes.common.random","util","microscopes.common.validator","irm","kernels","parallel","mixturemodel","Digit recognition with the MNIST dataset","Finding the number of clusters with the Dirichlet Process","Univariate Data with the Normal Inverse Chi-Square Distribution","Real Valued Data and the Normal Inverse-Wishart Distribution","Bayesian Nonparametric Topic Modeling with the Daily Kos","Understanding Your Results"],titleterms:{api:0,bayesian:[2,10,25],bernouli:1,beta:1,binari:1,categor:3,chi:23,cluster:[6,11,22],common:[12,13,14,16],corpu:6,count:7,daili:[9,25],data:[1,3,7,11,23,24],datamicroscop:[4,10],dataset:21,datatyp:[2,4],dataview:12,definit:[17,20],digit:21,dirichlet:[3,8,9,22],discov:11,discret:3,distribut:[1,3,7,23,24],enron:6,exampl:4,find:22,gamma:7,gaussian:8,gibb:18,hierarch:9,indic:0,infer:8,infinit:[5,6],instal:10,invers:[23,24],irm:17,kernel:18,learn:9,likelihood:4,mail:6,microscop:[12,13,14,16,17,18,20],mixtur:[8,20],mixturemodel:20,mnist:21,model:[2,4,5,6,8,10,17,20,25],network:5,nonparametr:[2,10,25],normal:[23,24],number:22,ordin:7,overview:11,parallel:19,poisson:7,process:[8,9,22],python:10,queri:[13,20],random:14,real:24,recarrai:12,recognit:21,refer:0,relat:[5,6,12],result:26,runner:20,slice:18,squar:23,structur:11,tabl:0,topic:[9,25],tutori:4,understand:26,univari:23,util:15,valid:16,valu:24,wishart:24,your:[11,26]}})