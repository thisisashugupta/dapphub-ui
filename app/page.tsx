import Image from 'next/image'

export default function Home() {

  function handleSubmit() {
    console.log('submit');
   }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>dapphub</div>
      <div><p>deploy projects</p></div>
      <div><p>Add Project</p></div>
      <div>
        <form action="get" onSubmit={handleSubmit}>
          {/* function registerDapp(
            string memory _repoUrl,
             string[] memory _tags, 
             bytes memory _signature) */}
          <input type="text" name="" id="" />

        </form>
      </div>
    </main>
  )
}
