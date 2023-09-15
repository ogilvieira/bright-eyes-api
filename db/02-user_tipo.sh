#!/bin/bash
set -e
export PGPASSWORD=$POSTGRES_PASSWORD;
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  \connect $APP_DB_NAME $APP_DB_USER
  BEGIN;
    CREATE TABLE IF NOT EXISTS public.user_tipo (
        id integer NOT NULL,
        key character varying NOT NULL,
        titulo character varying NOT NULL
    );
    INSERT INTO public.user_tipo VALUES (1, 'cliente', 'Cliente');
    INSERT INTO public.user_tipo VALUES (2, 'editor', 'Editor(a)');
    INSERT INTO public.user_tipo VALUES (2, 'gerente', 'Gerente');
  COMMIT;
EOSQL

