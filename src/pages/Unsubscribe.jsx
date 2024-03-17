import supabaseService from "../services/supabaseClient";

export default function Unsubcribe() {
    const [searchParams] = useSearchParams();
    const [message, setMessage] = useState('');
  
    useEffect(async () => {
      const token = searchParams.get('token');

      if(token) {
        await supabaseService.unsubscribeToNewsletter(token);
      }
    }, [searchParams]);

    return (
        <>
        <p>Unsubscribed.</p>
        </>
    )
}