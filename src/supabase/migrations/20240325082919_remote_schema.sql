create sequence "public"."posts_id_seq";

create table "public"."newsletter_subscribers" (
    "id" bigint generated by default as identity not null,
    "email" text not null,
    "subscribed_since" timestamp with time zone default now(),
    "uuid" uuid default gen_random_uuid(),
    "confirmed_subscription" boolean not null default false
);


alter table "public"."newsletter_subscribers" enable row level security;

create table "public"."posts" (
    "id" integer not null default nextval('posts_id_seq'::regclass),
    "title" character varying(150) not null,
    "excerpt" text,
    "content" text,
    "published_at" date default now(),
    "tags" character varying[],
    "cover_image_url" text,
    "slug" character varying(150) not null,
    "url" text not null default 'NULL'::text
);


alter table "public"."posts" enable row level security;

alter sequence "public"."posts_id_seq" owned by "public"."posts"."id";

CREATE UNIQUE INDEX newsletter_subscribers_email_key ON public.newsletter_subscribers USING btree (email);

CREATE UNIQUE INDEX newsletter_subscribers_pkey ON public.newsletter_subscribers USING btree (id);

CREATE UNIQUE INDEX newsletter_subscribers_uuid_key ON public.newsletter_subscribers USING btree (uuid);

CREATE UNIQUE INDEX posts_pkey ON public.posts USING btree (id);

CREATE UNIQUE INDEX posts_slug_key ON public.posts USING btree (slug);

CREATE UNIQUE INDEX posts_url_key ON public.posts USING btree (url);

alter table "public"."newsletter_subscribers" add constraint "newsletter_subscribers_pkey" PRIMARY KEY using index "newsletter_subscribers_pkey";

alter table "public"."posts" add constraint "posts_pkey" PRIMARY KEY using index "posts_pkey";

alter table "public"."newsletter_subscribers" add constraint "newsletter_subscribers_email_key" UNIQUE using index "newsletter_subscribers_email_key";

alter table "public"."newsletter_subscribers" add constraint "newsletter_subscribers_uuid_key" UNIQUE using index "newsletter_subscribers_uuid_key";

alter table "public"."posts" add constraint "posts_slug_key" UNIQUE using index "posts_slug_key";

alter table "public"."posts" add constraint "posts_url_key" UNIQUE using index "posts_url_key";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.handle_new_subscriber()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
BEGIN
  PERFORM net.http_post('https://gfecmvynsdgucmrxtexf.supabase.co/functions/v1/resend', json_build_object('email', NEW.email)::text);

  RETURN NEW;
END;
$function$
;

grant delete on table "public"."newsletter_subscribers" to "anon";

grant insert on table "public"."newsletter_subscribers" to "anon";

grant references on table "public"."newsletter_subscribers" to "anon";

grant select on table "public"."newsletter_subscribers" to "anon";

grant trigger on table "public"."newsletter_subscribers" to "anon";

grant truncate on table "public"."newsletter_subscribers" to "anon";

grant update on table "public"."newsletter_subscribers" to "anon";

grant delete on table "public"."newsletter_subscribers" to "authenticated";

grant insert on table "public"."newsletter_subscribers" to "authenticated";

grant references on table "public"."newsletter_subscribers" to "authenticated";

grant select on table "public"."newsletter_subscribers" to "authenticated";

grant trigger on table "public"."newsletter_subscribers" to "authenticated";

grant truncate on table "public"."newsletter_subscribers" to "authenticated";

grant update on table "public"."newsletter_subscribers" to "authenticated";

grant delete on table "public"."newsletter_subscribers" to "service_role";

grant insert on table "public"."newsletter_subscribers" to "service_role";

grant references on table "public"."newsletter_subscribers" to "service_role";

grant select on table "public"."newsletter_subscribers" to "service_role";

grant trigger on table "public"."newsletter_subscribers" to "service_role";

grant truncate on table "public"."newsletter_subscribers" to "service_role";

grant update on table "public"."newsletter_subscribers" to "service_role";

grant delete on table "public"."posts" to "anon";

grant insert on table "public"."posts" to "anon";

grant references on table "public"."posts" to "anon";

grant select on table "public"."posts" to "anon";

grant trigger on table "public"."posts" to "anon";

grant truncate on table "public"."posts" to "anon";

grant update on table "public"."posts" to "anon";

grant delete on table "public"."posts" to "authenticated";

grant insert on table "public"."posts" to "authenticated";

grant references on table "public"."posts" to "authenticated";

grant select on table "public"."posts" to "authenticated";

grant trigger on table "public"."posts" to "authenticated";

grant truncate on table "public"."posts" to "authenticated";

grant update on table "public"."posts" to "authenticated";

grant delete on table "public"."posts" to "service_role";

grant insert on table "public"."posts" to "service_role";

grant references on table "public"."posts" to "service_role";

grant select on table "public"."posts" to "service_role";

grant trigger on table "public"."posts" to "service_role";

grant truncate on table "public"."posts" to "service_role";

grant update on table "public"."posts" to "service_role";

create policy "Allow all users to insert"
on "public"."newsletter_subscribers"
as permissive
for insert
to public
with check (true);


create policy "Enable read access for all users"
on "public"."newsletter_subscribers"
as permissive
for select
to public
using (true);


create policy "update_confirmed_subscription"
on "public"."newsletter_subscribers"
as permissive
for update
to public
using (true);


create policy "Enable read access for all users"
on "public"."posts"
as permissive
for select
to public
using (true);


create policy "Everyone can insert"
on "public"."posts"
as permissive
for insert
to public
with check (true);


CREATE TRIGGER "Send Confirmation Email" AFTER INSERT ON public.newsletter_subscribers FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('https://gfecmvynsdgucmrxtexf.supabase.co/functions/v1/resend', 'POST', '{"Content-type":"application/json","Authorization":"Bearer re_4VV9tj4f_9Hyv2jJia4QUNuCSccmyXcEx"}', '{}', '1000');

CREATE TRIGGER "Send Welcome Email" AFTER UPDATE ON public.newsletter_subscribers FOR EACH ROW EXECUTE FUNCTION supabase_functions.http_request('https://gfecmvynsdgucmrxtexf.supabase.co/functions/v1/send_welcome_mail', 'POST', '{"Content-type":"application/json"}', '{}', '1000');

