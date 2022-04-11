---
permalink: /
title: 'Yulia Gryaditskaya'
layout: main
---

<div id="about" class="row align-items-center">
	<!-- Image -->
	<div class="col-sm-3">
		<img id="photo" src="Me.png" alt="Yulia Gryaditskaya"/>		
	</div>
	
	<div class="col-sm-8">			
		<div id = "info" >
		<h4 >Dr. Yulia Gryaditskaya</h4>

		<h5>Assistant Professor (Lecturer) in Artificial Intelligence at 
			<a href="https://www.surrey.ac.uk/centre-vision-speech-signal-processing">CVSSP</a> and 
			<a href ="https://www.surrey.ac.uk/artificial-intelligence">Surrey Institute for People-Centred AI</a>, UK
			<br/>
		</h5>

		Email address:
		<script src="myaddress.js" type="text/javascript"></script>
		</div >
		
		<br>
		
		<div id="main-downloads">
			<div>
			<img src="img/icons/pdfIcon.png" style="width:25px;" /> <a href="Gryaditskaya_cv.pdf">Curriculum Vitae (108 KB)</a>
			</div>
				<!-- <div class="col-sm-5 ">		 -->
					<!-- <img src="img/icons/pdfIcon.png" style="width:25px;" /> <a href="https://diglib.eg.org/bitstream/handle/10.2312/2631883/thesis_gryaditskaya_compressed.pdf?sequence=1&isAllowed=y">PhD dissertation (410 MB)</a> -->
				<!-- </div> -->
			
			<br>
			<div  class="row">
				<div class="col-sm-3 ">			
					<img src="img/icons/scholar.svg" style="width:20px;" />  <a href="https://scholar.google.co.uk/citations?user=cBB96b4AAAAJ">Google Scholar</a>
				</div>
				<div class="col-sm-2 ">			
					<img src="img/icons/lindein.PNG" style="width:20px;" /> <a href="https://www.linkedin.com/in/yulia-gryaditskaya-64a8164b/">LinkedIn</a>
				</div>
				<div class="col-sm-2 ">			
					<img src="img/icons/githubIcon.png" style="width:20px;" /> <a href="https://github.com/ygryadit/">GitHub</a>
				</div>
				<div class="col-sm-2 ">			
					<img src="img/icons/orcid.logo.icon.svg" style="width:20px;" /> <a href="https://orcid.org/0000-0002-1951-6475">ORCID</a>
				</div>
			</div>
			
	
		</div>

	</div>
</div>


<hr>

<section id="about">			
<div class="row align-items-center">			
	<!-- Bio -->
	<div id="bio" class="col-sm-12" >
		
				<h4 style="font-family: 'atlandsketchesbb_reg'; font-size: 300%;"> About </h4>
				<p>
					I am a Graphics and Vision Researcher, focusing on leveraging Graphics and Deep Learning for 2D and 3D sketch-related applications. 
					I am primarily interested in <i>AI, sketching and CAD for creation and creativity</i>.
				</p>
				<p>
					As a Senior Research Fellow (2020-2022) at <a href="https://www.surrey.ac.uk/centre-vision-speech-signal-processing"> CVSSP, UK</a>, at the <a href='https://scholar.google.co.uk/citations?user=irZFP_AAAAAJ&hl=en'>SketchX</a> group, 
					led by <a href='http://sketchx.eecs.qmul.ac.uk/'>Prof. Yi-Zhe Song</a>, I was co-advising PhD students in Vision and Deep Learning, 
					I focus on applying deep learning to a variety of sketching tasks (sketch-based modeling, retrieval, segmentation, and sketch-generation), 
					working with sketches by novices and professionals.
				</p>
				
				<p>					
					Before joining CVSSP, I was a postdoctoral researcher (2017-2020) at Inria, 
					<a href="https://team.inria.fr/graphdeco/">GraphDeco</a>, under the guidance of <a href ='http://www-sop.inria.fr/members/Adrien.Bousseau/'>Dr. Adrien Bousseau</a>, 
					where I studied concept sketching techniques and worked on sketch-based modeling.
				</p>
				<p>
					I received my PhD (2012-2016) from <a href="https://www.mpi-inf.mpg.de/">MPI Informatik</a>, 
					Germany, advised by <a href='https://people.mpi-inf.mpg.de/~karol/'>Prof. Karol Myszkowski</a> 
					and <a href='https://scholar.google.de/citations?user=s2Ibok8AAAAJ&hl=en'>Prof. Hans-Peter Seidel</a>. 
					My PhD focused on High Dynamic Range (HDR) image calibration, capturing HDR video on a mobile device, 
					tone mapping of HDR content, structured light fields, and editing materials in such light fields.
					While working on my PhD, I spent half a year in the Color and HDR group in 
					<a href="https://www.technicolor.com/contact/research-and-innovation"> Technicolor R&D</a>, Rennes, France, 
					under the guidance of <a href='http://www.erikreinhard.com/about.html'>Dr. Erik Reinhard</a>. 
					I received a degree (2007-2012) in <a href="http://www.msu.ru/en/info/struct/depts/vmc.html">Applied Mathematics and Computer Science</a>  with a specialization in Operation Research and System Analysis
					from <a href="http://www.msu.ru/en/info/">Lomonosov Moscow State University</a>, Russia.  
				</p>
				
				<!-- <p> -->
					<!-- My research interests cover sketch-based modeling, sketch beautification, geometric deep learning, sketch classification, sketch generation, high dynamic range image and video capture, tone-mapping and calibration,  -->
					<!-- depth estimation from the structured light-fields, materials representation and editing.	 -->
				
				<!-- </p> -->
				
				<p>
					<a href="https://www.rsipvision.com/ICCV2021-Friday/20/"> Interview at ICCV Daily </a>
				</p>
				
				
				
	</div>
</div>
</section>

<hr >

<section id="news">			
<div class="row align-items-center">			
	<!-- Bio -->
	<div class="col-sm-12" >
		<h4 style="font-family: 'atlandsketchesbb_reg'; font-size: 300%; color:#2fb673"> News </h4>
		
		<p>
			I have open PhD positions (3-4 years) at CVSSP (to be started by July 2022) with a PhD topic related to "AI and sketching for creation and creativity".
			<a href="./calls/PhD_call.pdf">Details</a>.
		</p>
	
	</div>
</div>
</section>
	
	
	
<hr >
<section id="publications" >
<div class="album py-5 bg-light">
    <div class="container">	

		<!-- Load publication  -->
		{% assign publications_all = site.data.publications  | sort : 'publ_id' %}
		{% assign year_curr = 0 %}
		{% assign j = 0 %}
		{% assign c = 0 %}
		{% assign d = 0 %}
		
		{% assign tj = 0 %}
		{% assign tc = 0 %}
		
		<!-- Print publications list -->
		
		
			<h3> Publications </h3>
            
			{% for publ in publications_all reversed %}
				{% if publ.type == "j" %}
					{% assign tj = tj | plus: 1%}					
				{% elsif publ.type == "c" %}
					{%assign tc = tc | plus: 1%}					
				{% endif %}	
			
			{% endfor %}
			
			
			{% for publ in publications_all reversed %}
				
				{% if year_curr != publ.year %}
					<!-- Year -->
					<h6 class='publ_year'> {{publ.year}} </h6>
					{% assign year_curr = publ.year %}
				{% endif %}
				
				{% if publ.preview_img_link != "" %}
				<div class="row mt-3 mb-1">
					
					<!-- <div class='col-sm-2 mt-3'> -->
						<!-- <div class="card align-items-center">	 -->
							<!-- <img src="{{publ.preview_img_link}}" width = '{{publ.img_width}}'/> -->
						<!-- </div>	 -->
					<!-- </div> -->
					<div class="col-sm-2 align-items-stretch d-flex align-items-stretch">
						<div class="card align-items-center justify-content-center w-100">		
							<img src="{{publ.preview_img_link}}" width = '99%' />						
						</div>
					</div>
					
					<div class="col-sm-10 align-items-stretch d-flex align-items-stretch">
						<div class="card w-100">								
							<div class="card-body">
								<!-- Title -->
								<div class='title card-title'>
									<!-- <a href="{{publ.title_link}}"> -->
										
										{% if publ.type == "j" %}
											{% assign j = j | plus: 1%}
											<span style="color:#ffa64d;">[{{publ.type}}{{tj | minus: j | plus: 1}}]</span>
										{% elsif publ.type == "c" %}
											{%assign c = c | plus: 1%}
											<span style="color:#a64dff;">[{{publ.type}}{{tc | minus: c | plus: 1}}]</span>
										{% endif %}	
										
										<!-- <span style="text-transform: uppercase;">{{publ.title}}</span> -->
										
										<span style="font-size: 110%;">{{publ.title}}</span>
										
									<!-- </a>  -->
								</div>						
								
								<!-- Authors -->
								<div class='authors card-subtitle'>					
									{{publ.authors}}
								</div>
								
								<!-- Venue -->
								<div class='conf'>
									{{publ.venue}}, {{publ.year}}.
								</div>
						
								<!-- Data -->
								<div class='data'>
									{% if publ.paper_link and publ.paper_link  != "" %}
										<img class='doc' src='img/icons/pdfIcon.png' width='19' height='19' alt='' />
											<a href="{{publ.paper_link}}"> 
											{% if publ.type != "d" %}
											paper 
											{% else %}
											thesis
											{% endif %}	
											</a> |				
									{% endif %}
									{% if publ.project_link and publ.project_link  != "" %}
										<a href="{{publ.project_link}}"> project_page </a> |
									{% endif %}
								
									{% if publ.code and publ.code  != "" %}
										<a href="{{publ.code}}"> code </a> |
									{% endif %}
									
									{% if publ.bibtex_link and publ.bibtex_link  != ""  %}
										<a href="{{publ.bibtex_link}}"> bibtex </a> 
									{% endif %}
								</div>	
							</div>
						</div>
					</div>
				</div>
				
				
				{% endif %}
				
			{% endfor %}
	</div>	
</div>
</section>	
<hr>

<section  id="datasets">
<div class="album py-5 bg-light">
	<div class="container">		
			<h3> Released datasets </h3>
			
			<!-- ---- -->
			<div class='publ_year'> 2021 </div>
			
			<div class="row mt-3 mb-1">
			
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">		
						<img src='DatasetsThumbs/VR21.png'  width = '99%'  />
					</div>
				</div>
				
				<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
						<div class="card w-100">	
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='https://cvssp.org/data/VRChairSketch/'> 3D VR chair sketches by non professionals </a>
							</div>
							
							<div class = 'DatasetDesc card-text' >
								We present the first fine-grained dataset of 1,497 3D VR sketch and 3D shape pairs for 1,005 chair shapes with large shapes diversity from the ShapeNetCore dataset from 50 participants.
								
								This datset is a part of the paper:
													
								<div style="color:grey">
								Fine-Grained VR Sketching: Dataset and Insights <br>
								Ling Luo, Yulia Gryaditskaya, Yongxin Yang, Tao Xiang, Yi-Zhe Song <br>
								Proceedings of International Conference on 3D Vision (3DV), 2021.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
			<!-- ---- -->
			<div class='publ_year'> 2020 </div>
			
			<div class="row mt-3 mb-1">
			
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">		
						<img src='DatasetsThumbs/SlowSketch.png'  width = '99%'  />
					</div>
				</div>
				
				<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
						<div class="card w-100">	
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='https://drive.google.com/file/d/1mWEY7vFkOw790DwUtqcTX8fHzNBP_b1J/view?usp=sharing'> SlowSketch </a>
							</div>
							
							<div class = 'DatasetDesc card-text' >
								1700 sketches from 12 participants of 20 categories, where the participants were asked to target early sketch recognition.
								
								This datset is a part of the paper:
													
								<div style="color:grey">
								Pixelor: A Competitive Sketching AI Agent. So you think you can sketch? <br>
								Ayan Kumar Bhunia, Ayan Das, Umar Riaz Muhammad, Yongxin Yang, Timothy Hospedales, Tao Xiang, Yulia Gryaditskaya, Yi-Zhe Song <br>
								ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia), 2020.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			<!-- <div class='publ_year'> 2020 </div> -->
			<div class="row mt-3 mb-1">
				
				
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">		
					<img src='DatasetsThumbs/ProSketch-3DChair.jpg'  width = '88%'  />
					</div>
				</div>
				
				<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
					<div class="card w-100">	
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='http://personal.ee.surrey.ac.uk/Personal/Y.Song/ProSketch-3Dchair.zip'> ProSketch-3DChair </a>
							</div>
							
							<div class = 'DatasetDesc card-text'>
								A dataset of 1500 chair sketches by professional artists: front, side and 3/4 viewpoints.
								
								This datset is a part of the paper:
													
								<div style="color:grey">
								Towards Practical Sketch-based 3D ShapeGeneration: The Role of Professional Sketches <br>
								Yue Zhong, Yonggang Qi, Yulia Gryaditskaya, Honggang Zhang, Yi-Zhe Song <br>
								IEEE Transactions on Circuits and Systems for Video Technology, 2020.
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			<!-- <div class='publ_year'> 2020 </div> -->
			<div class="row mt-3 mb-1">
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">	
					<img src='DatasetsThumbs/SChairSketch.png'  width = '99%'  />
					</div>
				</div>
				
					<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
					<div class="card w-100">
					<div class="card-body">
						<div class = 'title card-title'>
							<a href='https://cvssp.org/data/SyntheticChairSketch/'> Synthetic Chair Sketches </a>
						</div>
						
						<div class = 'DatasetDesc card-text'>
							The datset contains NPR sketches for a chair category of the ShapeNetCore dataset in two styles. 
							This datset is a part of the paper:
							
							<div style="color:grey">
							Deep Sketch-Based Modeling: Tips and Tricks <br>
							Yue Zhong, Yulia Gryaditskaya, Honggang Zhang, Yi-Zhe Song <br>
							Proceedings of International Conference on 3D Vision (3DV) - (Spotlight), 2020.
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			
			
			
			
			<!-- ---- -->
			
			<!-- <div class='publ_year'> 2020 </div> -->
			<div class="row mt-3 mb-1">
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">	
					<img src='DatasetsThumbs/3DVR.png'  width = '99%'  />
					</div>
				</div>
				
				<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
					<div class="card w-100">
					<div class="card-body">
						<div class = 'title card-title'>
						<a href='https://drive.google.com/file/d/1FkKZfWt7O4xMy4ir5kCYcmwZLPk1uBcZ/view?usp=sharing'>3D VR sketch-3D Shape pairs</a>
						</div>
					
						<div class = 'DatasetDesc card-text'>
							139 chair and 28 bathtub 3D VR sketches by novices.
							This datset is a part of the paper:
													
								<div style="color:grey">
								Towards 3D VR-Sketch to 3D Shape Retrieval <br>
								Ling Luo, Yulia Gryaditskaya, Yongxin Yang, Tao Xiang, Yi-Zhe Song <br>
								Proceedings of International Conference on 3D Vision (3DV) - (Oral), 2020.
								</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			
			<!-- <div class='publ_year'> 2020 </div> -->
			<div class="row mt-3 mb-1">
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">	
					<img src='DatasetsThumbs/OpenSketch++.png'  width = '99%'  />
					</div>
				</div>
				
				<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
					<div class="card w-100">
					<div class="card-body">
						<div class = 'title card-title'>
							<a href='https://repo-sam.inria.fr/d3/Lift3D/OpenSketch++.zip'>OpenSketch++</a>
						</div>
						
						<div class = 'DatasetDesc'>
							16 Vector concept sketches by 2 designers, collected in addtion to the skecthes in the OpenSketch dataset.
							This datset is a part of the paper:
													
								<div style="color:grey">
								
								Lifting Freehand Concept Sketches into 3D <br>
								Yulia Gryaditskaya, Felix Hähnlein, Chenxi Liu, Alla Sheffer, Adrien Bousseau <br>
								ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia), 2020.
								</div>
						</div>
					</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			
			<div class='publ_year'> 2019 </div>
			
			<div class="row mt-3 mb-1">
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">	
					<img src='DatasetsThumbs/OpenSketch.png'  width = '99%'  />
					</div>
				</div>
				
				<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
					<div class="card w-100">
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='https://repo-sam.inria.fr/d3/OpenSketch/'>OpenSketch</a>
							</div>
							
							<div class = 'DatasetDesc'>
								A richly-annotated dataset of more than 400 product design sketches.
								This datset is a part of the paper:
													
								<div style="color:grey">
								
								OpenSketch: A Richly-Annotated Dataset of Product Design Sketches <br>
								Yulia Gryaditskaya, Mark Sypesteyn, Jan Willem Hoftijzer, Sylvia Pont, Frédo Durand, Adrien Bousseau <br>
								ACM Transactions on Graphics (Proceedings of SIGGRAPH Asia), 2019.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
				
			<div class='publ_year'> 2014 </div>
			
			<div class="row mt-3 mb-1">
				<div class="col-sm-3 align-items-stretch d-flex align-items-stretch">
					<div class="card align-items-center justify-content-center w-100">	
					<img src='DatasetsThumbs/HDR.png'  width = '99%'  />
					</div>
				</div>
				
				<div class="col-sm-9 align-items-stretch d-flex align-items-stretch">
					<div class="card w-100">
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='https://drive.google.com/file/d/12qovT3CuJIVHVdM2wtA4RXi62-4sVoDO/view?usp=sharing'>Calibrated HDR Images</a>
							</div>
							
							<div class = 'DatasetDesc'>
								A set of calibrated HDR images, with visible sky regions and color checker.
								
								This datset is a part of the paper:
													
								<div style="color:grey">
									Sky Based Light Metering for High Dynamic Range Images <br>
									Yulia Gryaditskaya, Foteini Tania Pouli, Erik Reinhard, Hans-Peter Seidel <br>
									Computer Graphics Forum (Proc. Pacific Graphics), 2014.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
	</div>	
</div>	
</section>       	
		
<hr>

<section id="activities">
<div class="album py-5 bg-light">		
	
			<h3> Professional Activities </h3>
             <p>
				<h4> Area Chair/Technical Papers Committee Member:</h4> 
				<ul>
				<li><a href="https://sa2022.siggraph.org/en/"> SIGGRAPH Asia'22 </a></li>
				<li><a href="https://s2022.siggraph.org/"> SIGGRAPH North America'22 </a> <br></li>
				<li><a href="https://sa2021.siggraph.org/en/"> SIGGRAPH Asia'21 </a></li>
				</ul>
            </p>  
            
			<p>
				<h4>Organizer:</h4> 
                <ul>
				<li><a href="https://she-workshop.github.io/"> 2nd Workshop on Sketching for Human Expressivity (SHE) ECCV 2022 </a></li>
				<li><a href=""> CVMP 2022: Short papers and demos chair </a></li>
                <li><a href="https://she-workshop.github.io/"> 1st Workshop on Sketching for Human Expressivity (SHE) ICCV 2021 </a></li>
				<li> Weekly SketchX group meetings, 2021 </li> 
                </ul>
            </p> 
			
			
			
			<p>
				<h4>Reviewer:</h4> 
				<h6>Program/Paper Committee Member:</h6> 
				<ul>
				<li> Eurographics Symposium on Rendering (<a href="https://egsr.eu/2022/">EGSR 2022</a>), 
				</li>
				<li> IEEE/CVF Conference on Computer Vision and Pattern Recognition (<a href="https://cvpr2022.thecvf.com/">CVPR 2022</a>), 
				</li>
				<li> International Conference on Computer Vision (<a href="https://iccv2021.thecvf.com/home">ICCV 2021</a>), 
				</li>
				<li> International Conference on 3D Vision (<a href="http://iccvm.org/2020/committee.htm">3DV 2021</a>),
				</li>
				<li> International Conference on Computational Visual Media (<a href="http://iccvm.org/2020/committee.htm">CVM 2020</a>)
				</li>
				</ul>
				
				<h6>Conferences:</h6> 				
				SIGGRAPH, SIGGRAPH Asia, Eurographics, Pacific Graphics, VMV
				
				<h6>Journals:</h6> 
				ACM TOG, CAVW, Computers & Graphics, JEI, JVIP, Multimedia Systems, TCSVT, TIP, TVCG
			</p>
            
			<p>
				<h4>Invited talks</h4>
				06/2021 Autodesk, UK <br>
				02/2021 University of Bath, UK <br>
				12/2020 <a href="https://www.youtube.com/watch?v=TixJu8p9QZQ"> Christmas Colloquium on Computer Vision, Skolkovo, Moscow, Russia</a> 
			</p> 
			
			<p id = "students">
				<h4>Students:</h4>
				<ul>
					<li> 2021 -- ongoing, <a href="https://scholar.google.co.in/citations?hl=en&user=HE2nfp0AAAAJ&view_op=list_works&sortby=pubdate&inst=15262737669262836719">Pinaki Nath Chowdhury</a> (coadvised with Yi-Zhe Song)
						PhD student</li>
					<li> 2020 -- ongoing, <a href="https://rowl1ng.com/">Ling Luo</a> (coadvised with Yi-Zhe Song)
						PhD student</li>
					<li> 2020 -- ongoing, <a href="https://www.researchgate.net/scientific-contributions/Yue-Zhong-2149391947">Yue Zhong</a> (coadvised with Yi-Zhe Song)
						PhD student</li>			
					<li> 2020 -- 2021, <a href="https://dblp.org/pid/226/4981.html">Anran Qi</a> (coadvised with Yi-Zhe Song)
						PhD student </li>
                    <li> 2019, Felix Hahnlein (coadvised with Adrien Bousseau)
						Research Internship: 'Sketch segmentation with geometric deep learning'</li>
					<li> 2018, Adele Saint-Denis (coadvised with Adrien Bousseau)
						Research Internship: 'Non-photorealistic rendering'</li>
					<li> 2017, Marina Menghetti  (main adviser Adrien Bousseau)
						Research Internship: 'Strokes extraction from input video'</li>
					<li> 2015, Juliette Pelletier
						Engineering Internship: 'HDR Video Capture on a Mobile Device'</li>
				</ul>
			</p>
			
			<p>
				<h4>Teaching:</h4> 
				<a href="https://graphics.cg.uni-saarland.de/courses/ris-2018/"> Realistic Image Synthesis </a> : HDR & Tone Mapping 2015,2016 at <a href="https://www.uni-saarland.de"> Saarland University </a>
			</p>
</div>
</section>		

<section id ="hobbies">
<div >
	<hr />
	<p>
		<h4 style="font-family: 'atlandsketchesbb_reg'; font-size: 250%;">Hobbies</h4> 
		<ul>
			Sketching and painting (<a href="http://illustrators.ru/users/wonderland/portfolio">personal page</a>), architecture, city planning, traveling, hiking, sports.
		</ul>
	</p>	

</div>
</section>
