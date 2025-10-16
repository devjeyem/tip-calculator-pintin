import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div>
        <h1>Bill</h1>

        <h2>Select Tip %</h2>
        <div className="flex gap-2 flex-wrap">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>25%</button>
          <button>50%</button>
          <input type="text" placeholder="Custom" className="border p-1" />
        </div>

        <h2>Number of People</h2>
        <input type="number" placeholder="0" className="border p-1" />

        <div className="mt-4 border p-4 rounded">
          <p>Tip Amount / person</p>
          <p>Total / person</p>
          <button className="mt-2 bg-green-500 text-white px-3 py-1 rounded">
            Reset
          </button>
        </div>

        <div className="attribution mt-4 text-center text-sm text-gray-500">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-blue-600"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#" className="text-blue-600">
            Jm Pintin
          </a>
          .
        </div>
      </div>
    </main>
  );
}
