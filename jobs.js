
     
        let jobs = [
            { id: 1, company: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", sal: "$130,000 - $175,000", desc: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.", status: 'all' },
            { id: 2, company: "WebFlow Agency", position: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", sal: "$80,000 - $120,000", desc: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design.", status: 'all' }, 
            { id: 3, company: "DataViz Solutions", position: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", sal: "$125,000 - $165,000", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: 'all' },
             { id: 4, company: "CloudFirst Inc", position: "Backend Developer", location: "Boston, MA", type: "Full-time", sal: "$125,000 - $165,000", desc: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.", status: 'all' },
              { id: 5, company: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", sal: "$110,000 - $150,000", desc: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.", status: 'all' },
        { id: 6, company: "MegaCorp Solutions", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", sal: "$130,000 - $170,000", desc: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.", status: 'all' },
        { id: 7, company: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", sal: "$120,000 - $160,000", desc: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.", status: 'all' }, 
           { id: 8, company: "TechCorp Industries", position: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", sal: "$130,000 - $175,000", desc: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.", status: 'all' },  

        ];

        let currentTab = 'all';

        function renderJobs() {
            const container = document.getElementById('job-container');
            
           




            const filteredJobs = jobs.filter(i => {
                if (currentTab === 'all') return true;
                return i.status === currentTab;
            });







            document.getElementById('tablists').innerText = `${filteredJobs.length} jobs`;
            
          




            document.getElementById('total').innerText = jobs.length;
            document.getElementById('interview').innerText = jobs.filter(i => i.status === 'interview').length;
            document.getElementById('rejected').innerText = jobs.filter(i => i.status === 'rejected').length;

           



            if (filteredJobs.length === 0) {
                container.innerHTML = `
                    <div class="flex flex-col items-center justify-center py-24 text-center">
                        <div class="w-20 h-20 ">
                          

                            <img src="jobs.png">
                        
                        </div>
                        <h4 class="text-xl font-bold text-gray-400">No jobs Available</h4>
                        <p class="text-gray-400 text-sm mt-1"> Check back soon for new job opportunities</p>
                    </div>`;
                return;
            }

           




            container.innerHTML = filteredJobs.map(job => `
                <div class="p-6 border-b border-gray-100 relative group animate-fade-in">
                    <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-gray-300 hover:text-red-500 transition-colors p-2 bg-gray-50 rounded-full" title="Delete Application">
                          <p>Delete</p>
                    </button>
                    
                    <h4 class="text-xl font-bold text-green-500">${job.company}</h4>
                    <p class="text-gray-500 mt-1">${job.position}</p>
                    
                    <div class="flex gap-x-2 gap-y-1 mt-4 text-sm text-red-400 font-medium">
                        <span>${job.location}</span>
                        <span>•</span>
                        <span>${job.type}</span>
                        <span>•</span>
                        <span>${job.sal}</span>
                    </div>

                    <div class="mt-4">
                        <span class="inline-block px-3 py-1 ${getStatusStyle(job.status)} text-[10px] font-bold rounded uppercase">
                            ${job.status === 'all' ? 'Not Applied' : job.status}
                        </span>
                    </div>

                    <p class="mt-4 text-gray-900 text-sm  max-w-3xl">
                        ${job.desc}
                    </p>

                    <div class="mt-6 flex gap-3">
                        <button onclick="changeStatus(${job.id}, 'interview')" 
                            class="px-5 py-2 border transition-all rounded font-bold text-xs uppercase
                            ${job.status === 'interview' ? 'bg-green-600 border-green-600 text-white' : 'border-green-500 text-green-900 hover:bg-green-500'}">
                            Interview
                        </button>
                        <button onclick="changeStatus(${job.id}, 'rejected')" 
                            class="px-5 py-2 border transition-all rounded font-bold text-xs uppercase 
                            ${job.status === 'rejected' ? 'bg-red-500 border-red-500 text-white' : 'border-red-400 text-red-900 hover:bg-red-500'}">
                            Rejected
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function getStatusStyle(status) 
    
        {
            if (status === 'interview') return 'bg-green-50 text-green-600';
            if (status === 'rejected') return 'bg-red-50 text-red-600';
            return 'bg-blue-50 text-blue-600';
        }

       


        function changeStatus(id, newStatus) {
            const jobIndex = jobs.findIndex(item => item.id === id);
         


            jobs[jobIndex].status = newStatus;
            renderJobs();
        }


      
        function deleteJob(id) {

    //  console.log(id);       
    jobs = jobs.filter(i => i.id !== id); 
    renderJobs();
}

    
        function clickTab(tab) {
            currentTab = tab;
            const tabs = ['all', 'interview', 'rejected'];
            
            tabs.forEach(i => {
                const btn = document.getElementById(`tab-btn-${i}`);
                if (i === tab) {
                    btn.classList.replace('bg-white', 'bg-blue-600');
                    btn.classList.replace('text-gray-600', 'text-white');
                } else {
                    btn.classList.add('bg-white', 'text-gray-600');
                    btn.classList.remove('bg-blue-600', 'text-white');
                }
            });
            renderJobs();
        }
        renderJobs();
 