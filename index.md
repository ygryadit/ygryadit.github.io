---
permalink: /
title: 'Yuli Gryaditskaya'
layout: main
---

<div id='content'>
	<div class="main">
		
		<div id="info">
			<table>
				<tr>
					<td><img id="photo" src="Me.png" alt="Yulia Gryaditskaya"/></td>
					<td  id="bio">
						<div id="bio">
							<h3> About: </h3>
							<p>
								I am a Graphics and Vision Researcher, focusing at the moment on leveraging Graphics in Deep Learning for 2D and 3D sketch-related applications.
							</p>
							<p>
								As a Senior Research Fellow at <a href="https://www.surrey.ac.uk/centre-vision-speech-signal-processing"> CVSSP, UK</a>, at <a href='https://scholar.google.co.uk/citations?user=irZFP_AAAAAJ&hl=en'>SketchX</a> group, 
								lead by <a href='http://sketchx.eecs.qmul.ac.uk/'>Yi-Zhe Song</a>.
								I am currently co-advising PhD students in Vision and Deep Learning.
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
							<center>
								<table>
									<tr>
										<td align="left"> <img src="img/icons/pdfIcon.png" style="width:25px;" /> <a href="Gryaditskaya_cv.pdf">Curriculum Vitae (108 KB)</a></td>
										<td width="20px"> </td>
										<td align="right"> <img src="img/icons/pdfIcon.png" style="width:25px;" /> <a href="https://diglib.eg.org/bitstream/handle/10.2312/2631883/thesis_gryaditskaya_compressed.pdf?sequence=1&isAllowed=y">PhD dissertation (410 MB)</a></td>
										
									</tr>
									<tr>
										<td align="left"> <img src="img/icons/scholar.svg" style="width:20px;" />  <a href="https://scholar.google.co.uk/citations?user=cBB96b4AAAAJ">Google Scholar</a> </td>										
										<td width="20px"> </td>
										<td align="right"> <img src="img/icons/lindein.PNG" style="width:20px;" /><a href="https://www.linkedin.com/in/yulia-gryaditskaya-64a8164b/">LinkedIn</a></td>										
									</tr>
								</table>
							</center>

						</div>
					</td>
				</tr>
			</table>
		</div>
		
		
			
		<hr />
	
		
		<!-- Load publication  -->
		{% assign publications_all = site.data.publications  | sort : 'publ_id' %}
		{% assign year_curr = 0 %}
		<!-- Print publications list -->
		
		<div id="publications">
			<h2> Publications</h2>
            
			{% for publ in publications_all reversed %}
				
				{% if year_curr != publ.year %}
					<!-- Year -->
					<div class='publ_year'> {{publ.year}} </div>
					{% assign year_curr = publ.year %}
				{% endif %}
				
				{% if publ.preview_img_link != "" %}
					
					<div class='thumb'>
						<img src="{{publ.preview_img_link}}" width = '{{publ.img_width}}'/>
					</div>
					
					<div class='ref'>
						<!-- Title -->
						<div class='title'>
							<a href="{{publ.title_link}}">
								{{publ.title}}
							</a> 
						</div>						
						
						<!-- Authors -->
						<div class='authors'>					
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
				
				
				{% endif %}
				
			{% endfor %}
		
		</div>
		
	
		<hr/>
		<div id="datasets">
			<h2> Released datasets </h2>
			
			<!-- ---- -->
			<div class='publ_year'> 2020 </div>
			
			<div class='thumbD'  >
                <img src='DatasetsThumbs/SlowSketch.png'  width = '180px'  />
            </div>
			
			<div class='refS'>
			
				<div class = 'title'>
					<a href='https://drive.google.com/file/d/1mWEY7vFkOw790DwUtqcTX8fHzNBP_b1J/view?usp=sharing'> SlowSketch </a>
				</div>
				
				<div class = 'DatasetDesc'>
					1700 sketches from 12 participants of 20 categories, where the participants were asked to target early sketch recognition.
				</div>
			</div>
			
			<!-- ---- -->
			<!-- <div class='publ_year'> 2020 </div> -->
			
			<div class='thumbD' >
                <img src='DatasetsThumbs/ProSketch-3DChair.jpg'  width = '180px'  />
            </div>
			
			<div class='refB'>
			
				<div class = 'title'>
					<a href='http://personal.ee.surrey.ac.uk/Personal/Y.Song/ProSketch-3Dchair.zip'> ProSketch-3DChair </a>
				</div>
				
				<div class = 'DatasetDesc'>
					A dataset of 1500 chair sketches by professional artists: front, side and 3/4 viewpoints
				</div>
			</div>
			
			<!-- ---- -->
			
			<!-- <div class='publ_year'> 2020 </div> -->
			
			<div class='thumbD' >
                <img src='DatasetsThumbs/3DVR.png'  width = '180px'  />
            </div>
			
			<div class='refS'>
			
				<div class = 'title'>
					<a href='https://drive.google.com/file/d/1FkKZfWt7O4xMy4ir5kCYcmwZLPk1uBcZ/view?usp=sharing'>3D VR sketch-3D Shape pairs</a>
				</div>
				
				<div class = 'DatasetDesc'>
					139 chair and 28 bathtub 3D VR sketches by novices.
				</div>
			</div>
			
			<!-- ---- -->
			
			<!-- <div class='publ_year'> 2020 </div> -->
			
			<div class='thumbD' >
                <img src='DatasetsThumbs/OpenSketch++.png'  width = '180px'  />
            </div>
			
			<div class='ref'>
			
				<div class = 'title'>
					<a href='https://repo-sam.inria.fr/d3/Lift3D/OpenSketch++.zip'>OpenSketch++</a>
				</div>
				
				<div class = 'DatasetDesc'>
					16 Vector concept sketches by 2 designers, collected in addtion to the skecthes in the OpenSketch dataset.
				</div>
			</div>
			
			
			<!-- ---- -->
			
			<div class='publ_year'> 2019 </div>
			
			<div class='thumbD' >
                <img src='DatasetsThumbs/OpenSketch.png'  width = '180px'  />
            </div>
			
			<div class='refS'>
			
				<div class = 'title'>
					<a href='https://repo-sam.inria.fr/d3/OpenSketch/'>OpenSketch</a>
				</div>
				
				<div class = 'DatasetDesc'>
					A richly-annotated dataset of more than 400 product design sketches.
				</div>
			</div>
			
				
			<div class='publ_year'> 2014 </div>
			
			<div class='thumbD' >
                <img src='DatasetsThumbs/HDR.png'  width = '180px'  />
            </div>
			
			<div class='refS'>
			
				<div class = 'title'>
					<a href='https://drive.google.com/file/d/12qovT3CuJIVHVdM2wtA4RXi62-4sVoDO/view?usp=sharing'>Calibrated HDR Images</a>
				</div>
				
				<div class = 'DatasetDesc'>
					A set of calibrated HDR images, with visible sky regions and color checker.
				</div>
			</div>
			
			
			
		</div>	

          	
		
		<hr/>
		
		<div id="activities">
			<h2> Professional Activities </h2>
             <p>
				<h3>Program/Paper Committee Member:</h3> 
                <ul>
		<li><a href="https://sa2021.siggraph.org/en/"> 2021 SIGGRAPH Asia </a></li>
                <li><a href="http://iccvm.org/2020/committee.htm"> 2020 CVM </a></li>
                </ul>
            </p>  
            
			<p>
				<h3>Organizer:</h3> 
                <ul>
                <li><a href="https://she-iccv21.github.io/"> 1st Workshop on Sketching for Human Expressivity (SHE) ICCV 2021 </a></li>
                </ul>
            </p> 
			
			
			<p>
				<h3>Reviewer:</h3> 
				ACM TOG, SIGGRAPH, SIGGRAPH Asia, Eurographics, Pacific Graphics, ICCV, TVCG, Computers & Graphics, VMV, JEI, TIP, JVIP, Multimedia Systems
			</p>
             
			<p>
				<h3>Students:</h3>
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
				<h3>Teaching:</h3> 
				<a href="https://graphics.cg.uni-saarland.de/courses/ris-2018/"> Realistic Image Synthesis </a> : HDR & Tone Mapping 2015,2016 at <a href="https://www.uni-saarland.de"> Saarland University </a>
			</p>
		</div>
		
		<div id ="hobbies">
			<hr />
			<p>
				<h2>Hobbies:</h2> 
				<ul>
					Drawing (<a href="http://illustrators.ru/users/wonderland/portfolio">personal page</a>), sports and world discovering.
				</ul>
			</p>	
	
		</div>
		
	</div>
</div>	
	
	
			
	




