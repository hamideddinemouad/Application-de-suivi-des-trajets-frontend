
import Form from  "./components/Form";
export default function Login() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md">

          <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
