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

		<h5>Senior Research Fellow at <a href="https://www.surrey.ac.uk/centre-vision-speech-signal-processing"> CVSSP, UK </a><br/></h5>

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
					I am a Graphics and Vision Researcher, focusing on leveraging Graphics in Deep Learning for 2D and 3D sketch-related applications.
				</p>
				<p>
					As a Senior Research Fellow at <a href="https://www.surrey.ac.uk/centre-vision-speech-signal-processing"> CVSSP, UK</a>, at <a href='https://scholar.google.co.uk/citations?user=irZFP_AAAAAJ&hl=en'>SketchX</a> group, 
					lead by <a href='http://sketchx.eecs.qmul.ac.uk/'>Yi-Zhe Song</a>,
					I am co-advising PhD students in Vision and Deep Learning.
				</p>
				
				<p>
					As a postdoctoral researcher at Inria, <a href="https://team.inria.fr/graphdeco/">GraphDeco </a> group under <a href ='http://www-sop.inria.fr/members/Adrien.Bousseau/'>Adrien Bousseau</a>, I studied concept sketching techniques and worked on sketch-based modeling.
				</p>
				<p>
					I got my PhD at <a href="https://www.mpi-inf.mpg.de/">MPI Informatik</a>, 
					Germany, advised by <a href='https://people.mpi-inf.mpg.de/~karol/'>Karol Myszkowski</a> 
					and <a href='https://scholar.google.de/citations?user=s2Ibok8AAAAJ&hl=en'>Hans-Peter Seidel</a>. As a part of my PhD, I spent 
					half a year in Color and HDR group in <a href="https://www.technicolor.com/contact/research-and-innovation"> Technicolor R&D</a>, Rennes, France, under <a href='http://www.erikreinhard.com/about.html'> Erik Reinhard</a>. 
					I obtained my diploma in 
					<a href="http://www.msu.ru/en/info/struct/depts/vmc.html">Applied Mathematics and Computer Science</a>  with a specialization in Operation Research and System Analysis
					from <a href="http://www.msu.ru/en/info/">MSU Lomonosov</a>, Russia.  
				</p>
				
				<p>
					My research interests cover sketch-based modeling, sketch beautification, geometric deep learning, sketch classification, sketch generation, high dynamic range image and video capture, tone-mapping and calibration, 
					depth estimation from the structured light-fields, materials representation and editing.	
				
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
		<!-- Print publications list -->
		
		
			<h3> Publications </h3>
            
			{% for publ in publications_all reversed %}
				
				{% if year_curr != publ.year %}
					<!-- Year -->
					<h6 class='publ_year'> {{publ.year}} </h6>
					{% assign year_curr = publ.year %}
				{% endif %}
				
				{% if publ.preview_img_link != "" %}
				<div class="row mt-3 mb-1">
					<div class='col-sm-2 mt-3'>
						<div class="card align-items-center">	
							<img src="{{publ.preview_img_link}}" width = '{{publ.img_width}}'/>
						</div>	
					</div>
					
					<div class='col-sm-10'>
						<div class="card">	
							
							<div class="card-body">
								<!-- Title -->
								<div class='title card-title'>
									<a href="{{publ.title_link}}">
										{{publ.title}}
									</a> 
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
											<a href="{{publ.paper_link}}"> paper 
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
			<div class='publ_year'> 2020 </div>
			
			<div class="row mt-3 mb-1">
			
				<div class="card justify-content-center">	
					<img src='DatasetsThumbs/SlowSketch.png'  width = '200px'  />
				</div>
				
				<div class='refS col-sm-9'>
					<div class="card">	
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='https://drive.google.com/file/d/1mWEY7vFkOw790DwUtqcTX8fHzNBP_b1J/view?usp=sharing'> SlowSketch </a>
							</div>
							
							<div class = 'DatasetDesc card-text' >
								1700 sketches from 12 participants of 20 categories, where the participants were asked to target early sketch recognition.
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			<!-- <div class='publ_year'> 2020 </div> -->
			<div class="row mt-3 mb-1">
				<div class='thumbD card justify-content-center' >
					<img src='DatasetsThumbs/ProSketch-3DChair.jpg'  width = '200px'  />
				</div>
				
				<div class='refB refS col-sm-9'>
					<div class="card">
					<div class="card-body">
						<div class = 'title card-title'>
							<a href='http://personal.ee.surrey.ac.uk/Personal/Y.Song/ProSketch-3Dchair.zip'> ProSketch-3DChair </a>
						</div>
						
						<div class = 'DatasetDesc card-text'>
							A dataset of 1500 chair sketches by professional artists: front, side and 3/4 viewpoints
						</div>
					</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			
			<!-- <div class='publ_year'> 2020 </div> -->
			<div class="row mt-3 mb-1">
				<div class='thumbD card' >
					<img src='DatasetsThumbs/3DVR.png'  width = '200px'  />
				</div>
				
				<div class='refS col-sm-9'>
					<div class="card">
					<div class="card-body">
						<div class = 'title card-title'>
						<a href='https://drive.google.com/file/d/1FkKZfWt7O4xMy4ir5kCYcmwZLPk1uBcZ/view?usp=sharing'>3D VR sketch-3D Shape pairs</a>
						</div>
					
						<div class = 'DatasetDesc card-text'>
							139 chair and 28 bathtub 3D VR sketches by novices.
						</div>
					</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			
			<!-- <div class='publ_year'> 2020 </div> -->
			<div class="row mt-3 mb-1">
				<div class='thumbD card' >
					<img src='DatasetsThumbs/OpenSketch++.png'  width = '200px'  />
				</div>
				
				<div class='ref col-sm-9'>
					<div class="card">
					<div class="card-body">
						<div class = 'title card-title'>
							<a href='https://repo-sam.inria.fr/d3/Lift3D/OpenSketch++.zip'>OpenSketch++</a>
						</div>
						
						<div class = 'DatasetDesc'>
							16 Vector concept sketches by 2 designers, collected in addtion to the skecthes in the OpenSketch dataset.
						</div>
					</div>
					</div>
				</div>
			</div>
			
			<!-- ---- -->
			
			<div class='publ_year'> 2019 </div>
			
			<div class="row mt-3 mb-1">
				<div class='thumbD card justify-content-center' >
					<img src='DatasetsThumbs/OpenSketch.png'  width = '200px'  />
				</div>
				
				<div class='refS col-sm-9'>
					<div class="card">
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='https://repo-sam.inria.fr/d3/OpenSketch/'>OpenSketch</a>
							</div>
							
							<div class = 'DatasetDesc'>
								A richly-annotated dataset of more than 400 product design sketches.
							</div>
						</div>
					</div>
				</div>
			</div>
				
			<div class='publ_year'> 2014 </div>
			
			<div class="row mt-3 mb-1">
				<div class='thumbD card  justify-content-center' >
					<img src='DatasetsThumbs/HDR.png'  width = '200px'  />
				</div>
				
				<div class='refS col-sm-9'>
				
					<div class="card">
						<div class="card-body">
							<div class = 'title card-title'>
								<a href='https://drive.google.com/file/d/12qovT3CuJIVHVdM2wtA4RXi62-4sVoDO/view?usp=sharing'>Calibrated HDR Images</a>
							</div>
							
							<div class = 'DatasetDesc'>
								A set of calibrated HDR images, with visible sky regions and color checker.
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
				<h4>Program/Paper Committee Member:</h4> 
                <ul>
				<li><a href="https://sa2021.siggraph.org/en/"> 2021 SIGGRAPH Asia </a></li>
				<li><a href="https://3dv2021.surrey.ac.uk/"> 2021 3DV </a></li>
                <li><a href="http://iccvm.org/2020/committee.htm"> 2020 CVM </a></li>
                </ul>
            </p>  
            
			<p>
				<h4>Organizer:</h4> 
                <ul>
                <li><a href="https://she-iccv21.github.io/"> 1st Workshop on Sketching for Human Expressivity (SHE) ICCV 2021 </a></li>
				<li> Weekly SketchX group meetings. </li> 
                </ul>
            </p> 
			
			
			<p>
				<h4>Reviewer:</h4> 
				<h6>Conferences:</h6> 				
				SIGGRAPH, SIGGRAPH Asia, Eurographics, Pacific Graphics, ICCV, VMV
				
				<h6>Journals:</h6> 
				ACM TOG, CAVW, Computers & Graphics, JEI, JVIP, Multimedia Systems, TCSVT, TIP, TVCG

			</p>
             
			<p>
				<h4>Students:</h4>
				<ul>
					<li> Anran Qi, ongoing (coadvised with Yi-Zhe Song)
						PhD student</li>
					<li> Ling Luo, ongoing (coadvised with Yi-Zhe Song)
						PhD student</li>
					<li> Yue Zhong, ongoing (coadvised with Yi-Zhe Song)
						PhD student</li>			
                    <li> Felix Hahnlein, 2019 (coadvised with Adrien Bousseau)
						Research Internship: 'Sketch segmentation with geometric deep learning'</li>
					<li> Adele Saint-Denis, 2018 (coadvised with Adrien Bousseau)
						Research Internship: 'Non-photorealistic rendering'</li>
					<li> Marina Menghetti, 2017 (main adviser Adrien Bousseau)
						Research Internship: 'Strokes extraction from input video'</li>
					<li> Juliette Pelletier, 2015
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
			Drawing (<a href="http://illustrators.ru/users/wonderland/portfolio">personal page</a>), sports and world discovering.
		</ul>
	</p>	

</div>
</section>
